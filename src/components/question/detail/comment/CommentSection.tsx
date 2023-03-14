import Button from '@/components/common/Button';
import CommentList from '@/components/question/detail/comment/CommentList';
import CommentWrite from '@/components/question/detail/comment/CommentWrite';
import { useState } from 'react';
import styled from 'styled-components';

const CommentSection = ({ answerId }: { answerId: number }) => {
  const [isCommentShow, setIsCommentShow] = useState(false);

  const handleCommentShow = async () => {
    setIsCommentShow(!isCommentShow);
  };

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentLabel>{'댓글'}</CommentLabel>
        <MoreButton onClick={handleCommentShow}>{isCommentShow ? '😮 댓글 접기 > ' : '😎 댓글 보기 > '}</MoreButton>
      </CommentHeader>
      {isCommentShow && (
        <>
          <CommentList answerId={answerId} />
          <CommentWrite answerId={answerId} />
        </>
      )}
    </CommentContainer>
  );
};

const CommentContainer = styled.section`
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
