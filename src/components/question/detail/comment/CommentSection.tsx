import { getCommentPage } from '@/api/comments';
import Button from '@/components/common/button/Button';
import CommentList from '@/components/question/detail/comment/CommentList';
import CommentWrite from '@/components/question/detail/comment/CommentWrite';
import { useState } from 'react';
import styled from 'styled-components';

const CommentSection = ({ answerId }: { answerId: number }) => {
  const [isCommentShow, setIsCommentShow] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const handleCommentShow = async () => {
    const { count } = await getCommentPage({ size: 5, answerId });
    setIsCommentShow(!isCommentShow);
    setTotalPage(count);
  };

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentLabel>{'댓글'}</CommentLabel>
        <MoreButton onClick={handleCommentShow}>{isCommentShow ? '😮 댓글 접기 > ' : '😎 댓글 보기 > '}</MoreButton>
      </CommentHeader>
      {isCommentShow && (
        <>
          <CommentList totalPage={totalPage} />
          <CommentWrite answerId={answerId} />
        </>
      )}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const MoreButton = styled(Button)`
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: ${({ theme }) => theme.primaryColor};
`;

export default CommentSection;
