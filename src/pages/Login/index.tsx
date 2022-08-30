import Button from '@/components/Button';
import LabelInput from '@/components/Input/LabelInput';
import ValidationInput from '@/components/Input/ValidationInput';
import { useLoginMutation } from '@/hooks/queries/useUser';
import useValidationInput, { UseValidationInputReturn } from '@/hooks/useValidationInput';
import { loginState } from '@/store/users';
import { validateLoginEmail, validateLoginPwd, VALIDATION_ERROR_MSG } from '@/utils/validations';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useValidationInput('', validateLoginEmail);
  const password = useValidationInput('', validateLoginPwd);

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

  const handleLogin = (email: UseValidationInputReturn, password: UseValidationInputReturn) => {
    email.checkValidation();
    password.checkValidation();
    if (email.isValid && password.isValid) {
      mutationLogin.mutate({ email: email.value, password: password.value });
    }
  };

  return (
    <LoginContainer>
      <LabelInput label="이메일">
        <ValidationInput
          type={'email'}
          value={email.value}
          onChange={email.onChange}
          isValid={email.isValid}
          msg={VALIDATION_ERROR_MSG.EMPTY_EMAIL}
        />
      </LabelInput>
      <LabelInput label="비밀번호">
        <ValidationInput
          type={'password'}
          value={password.value}
          onChange={password.onChange}
          isValid={password.isValid}
          msg={VALIDATION_ERROR_MSG.EMPTY_PASSWORD}
        />
      </LabelInput>
      <LoginButton onClick={() => handleLogin(email, password)}>{'로그인'}</LoginButton>
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

const LoginButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
`;

export default LoginPage;
