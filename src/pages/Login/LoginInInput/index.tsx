import { login } from '@/api/users';
import { PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import ValidationInput from '@/components/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginInputSection = () => {
  const navigate = useNavigate();
  const email = useValidationInput('', 'email');
  const password = useValidationInput('', 'password');

  const moveToSignUp = () => {
    navigate('/sign-up');
  };

  const moveToForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = async (email, password) => {
    if (email.isError || password.isError) return;
    await login({
      email,
      password,
    });
  };

  return (
    <InputSection>
      <ValidationInput input={email} label="이메일" type="email" placeholder="이메일을 입력해주세요."></ValidationInput>
      <ValidationInput
        input={password}
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
      ></ValidationInput>
      <Button onClick={() => handleLogin(email, password)}>{'로그인'}</Button>
      <SignUpContainer>
        <u onClick={moveToForgotPassword}>비밀번호 찾기</u>
        <u onClick={moveToSignUp}>회원가입</u>
      </SignUpContainer>
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUpContainer = styled.div`
  width: 19em;
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

export default LoginInputSection;
