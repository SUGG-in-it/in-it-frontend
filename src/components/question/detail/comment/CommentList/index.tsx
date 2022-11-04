import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import Pagination from '@/components/common/Pagination';
import CommentItem from '@/components/question/detail/comment/CommentItem';
import CommentListSkeleton from '@/components/question/detail/comment/CommentList/index.skeleton';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useCommentPageQuery, useCommentsQuery } from '@/hooks/queries/useComments';
import { Suspense, useState } from 'react';

const Comments = ({ answerId }: { answerId: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: comments } = useCommentsQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.COMMENT_LIST,
    answerId: answerId,
  });

  const { data: page } = useCommentPageQuery({ size: PAGINATION_SIZE.COMMENT_LIST, answerId });

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <>
      {comments?.comments?.map((comment) => (
        <CommentItem key={comment.commentId} {...comment} />
      ))}
      <Pagination totalPage={page?.count} currentPage={currentPage} onPageClick={handlePageClick} />
    </>
  );
};

const CommentList = ({ answerId }: { answerId: number }) => (
  <RetryErrorBoundary>
    <Suspense fallback={<CommentListSkeleton />}>
      <Comments answerId={answerId} />
    </Suspense>
  </RetryErrorBoundary>
);

export default CommentList;
