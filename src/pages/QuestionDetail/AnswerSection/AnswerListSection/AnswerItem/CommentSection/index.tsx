import Button from '@/components/Button';
import CommentList from '@/pages/QuestionDetail/AnswerSection/AnswerListSection/AnswerItem/CommentSection/CommentList';
import CommentWrite from '@/pages/QuestionDetail/AnswerSection/AnswerListSection/AnswerItem/CommentSection/CommentWrite';
import { useState } from 'react';
import styled from 'styled-components';

const CommentSection = () => {
  const [isCommentShow, setIsCommentShow] = useState(false);

  return (
    <CommentContainer>
      <CommentHeader>
        <CommentLabel>{'댓글'}</CommentLabel>
        <MoreButton onClick={() => setIsCommentShow(!isCommentShow)}>
          {isCommentShow ? '😮 댓글 접기 > ' : '😎 댓글 보기 > '}
        </MoreButton>
      </CommentHeader>
      {isCommentShow && (
        <>
          <CommentList /> <CommentWrite />
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
