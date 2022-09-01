import Button from '@/components/common/Button';
import styled from 'styled-components';

const CommentWrite = () => {
  const handleClick = () => {
    // TODO: 댓글 등록 api 호출
  };

  return (
    <CommentWriteContainer>
      <textarea name="comment" placeholder="댓글을 작성해주세요!"></textarea>
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
