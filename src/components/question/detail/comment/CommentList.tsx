import MoonLoading from '@/components/common/loading/MoonLoading';
import Pagination from '@/components/common/Pagination';
import CommentItem from '@/components/question/detail/comment/CommentItem';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useCommentsQuery } from '@/hooks/queries/useComments';
import { media } from '@/styles/mediaQuery';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiRotateCcw } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const CommentsFallback = ({ error, resetErrorBoundary }) => (
  <>
    <RetryBox>
      <p>댓글 리스트를 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </>
);

const CommentsLoading = () => <Skeleton wrapper={MoonLoading} count={5} />;

const Comments = ({ totalPage, answerId }: { totalPage: number; answerId: number }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: comments } = useCommentsQuery({ page: 0, size: PAGINATION_SIZE.COMMENT_LIST, answerId: answerId });

  const handlePageClick = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <>
      {comments?.comments?.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))}
      <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
    </>
  );
};

const CommentList = ({ totalPage, answerId }: { totalPage: number; answerId: number }) => (
  <ErrorBoundary FallbackComponent={CommentsFallback}>
    <Suspense fallback={<CommentsLoading />}>
      <Comments totalPage={totalPage} answerId={answerId} />
    </Suspense>
  </ErrorBoundary>
);

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRotateCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default CommentList;
