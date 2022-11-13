import Button from '@/components/common/button/Button';
import { useUploadCommentMutation } from '@/hooks/queries/useComments';
import { loginState } from '@/store/users';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const CommentWrite = ({ answerId }: { answerId: number }) => {
  const [content, setContent] = useState('');
  const isLogin = useRecoilValue(loginState);
  const router = useRouter();

  const muatationUploadComment = useUploadCommentMutation({
    onSuccess: () => {
      setContent('');
    },
  });

  const handleClick = () => {
    muatationUploadComment.mutate({ content, answerId });
  };

  const handleCommentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLoginButton = () => {
    router.push('/signin');
  };

  return isLogin ? (
    <CommentWriteContainer>
      <textarea name="comment" placeholder="댓글을 작성해주세요!" onChange={handleCommentChange} value={content} />
      <PostButton onClick={handleClick}>{'댓글 등록'}</PostButton>
    </CommentWriteContainer>
  ) : (
    <ButtonContainer>
      <Notice>{`로그인하여 댓글을 작성해주세요!`}</Notice>
      <LoginButton onClick={handleLoginButton}>{`😎 로그인 하러 가기`}</LoginButton>
    </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3em 2em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled(Button)`
  width: 200px;
`;

const Notice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1em;
`;

export default CommentWrite;
