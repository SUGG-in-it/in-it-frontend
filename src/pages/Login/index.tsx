import { login } from '@/api/users';
import Button from '@/components/Button';
import ValidationInput from '@/components/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';
import { useLoginMutation } from '@/hooks/queries/useUser';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* -------------------------------------------------------------------------------------------------
 * 리액트 쿼리와 에러바운더리 사용 총정리
  데이터를 조회할 때 (useQuery) 사용시에는 errorboundary와 suspense(skeleton)를 같이 사용하여 보여주기 아래의 예시처럼, 다시 시도하기 보여주기
  handleError해서 500대 에러이면 critical 전파! -> 그냥 단순히 런타임 에러이면 root 전파!
  데이터를 변화시킬 때 (useMutation) 사용시에는 리액트쿼리 onError에서 toast 메시지만 보여주기!! 
 * -----------------------------------------------------------------------------------------------*/

const UserLoginFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p> 에러: {error.message} </p>
      <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
    </div>
  );
};

const UserLoginLoading = () => <div> 로그인하는 중입니다. </div>;

const UserLogin = () => {
  const navigate = useNavigate();
  const email = useValidationInput('', 'email');
  const password = useValidationInput('', 'password');
  const mutationLogin = useLoginMutation();

  const moveToSignUp = () => {
    navigate('/sign-up');
  };

  const moveToForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = (email, password) => {
    if (email.isError || password.isError) return;
    mutationLogin.mutate(email, password);
  };

  return (
    <LoginContainer>
      <ValidationInput input={email} label="이메일" type="email" placeholder="이메일을 입력해주세요." />
      <ValidationInput input={password} label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Button onClick={() => handleLogin(email, password)}>{'로그인'}</Button>
      <SignUpContainer>
        <u onClick={moveToForgotPassword}>비밀번호 찾기</u>
        <u onClick={moveToSignUp}>회원가입</u>{' '}
      </SignUpContainer>
    </LoginContainer>
  );
};

const LoginPage = () => {
  return (
    <ErrorBoundary FallbackComponent={UserLoginFallback}>
      <Suspense fallback={<UserLoginLoading />}>
        <UserLogin />
      </Suspense>
    </ErrorBoundary>
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
