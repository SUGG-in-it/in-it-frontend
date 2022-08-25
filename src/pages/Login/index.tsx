import Button from '@/components/Button';
import ValidationInput from '@/components/Input/ValidationInput';
import { useLoginMutation } from '@/hooks/queries/useUser';
import useValidationInput from '@/hooks/useValidationInput';
import { loginState } from '@/store/users';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useValidationInput('', 'email');
  const password = useValidationInput('', 'password');
  const setIsLogin = useSetRecoilState(loginState);
  const mutationLogin = useLoginMutation({
    onSuccess: () => {
      navigate('/');
      setIsLogin(true);
    },
  });

  const moveToSignUp = () => {
    navigate('/sign-up');
  };

  const moveToForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = (email, password) => {
    if (email.isError || password.isError) return;
    mutationLogin.mutate({ email: email.value, password: password.value });
  };

  return (
    <LoginContainer>
      <ValidationInput input={email} label="이메일" type="email" placeholder="이메일을 입력해주세요."></ValidationInput>
      <ValidationInput input={password} label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Button onClick={() => handleLogin(email, password)}>{'로그인'}</Button>
      <SignUpContainer>
        <u onClick={moveToForgotPassword}>비밀번호 찾기</u>
        <u onClick={moveToSignUp}>회원가입</u>{' '}
      </SignUpContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
`;

const SignUpContainer = styled.div`
  justify-content: space-between;
  display: flex;
  u {
    color: white;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default LoginPage;
