import Button from '@/components/common/button/Button';
import { useUploadAnswerMutation } from '@/hooks/queries/useComments';
import { useState } from 'react';
import styled from 'styled-components';

const CommentWrite = ({ answerId }: { answerId: number }) => {
  const muatationUploadComment = useUploadAnswerMutation({});
  const [content, setContent] = useState('');

  const handleClick = () => {
    muatationUploadComment.mutate({ content, answerId });
  };

  const handleCommentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <CommentWriteContainer>
      <textarea name="comment" placeholder="댓글을 작성해주세요!" onChange={handleCommentChange}></textarea>
      <PostButton onClick={handleClick}>{'댓글 등록'}</PostButton>
    </CommentWriteContainer>
  );
};

const CommentWriteContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin: 2em 3% 0;
  textarea {
    width: 100%;
    height: 100px;
    padding: 0.5em;
  }
`;

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100px;
`;

export default CommentWrite;
