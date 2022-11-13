import AccountLayout from '@/components/layouts/AccountLayout';
import { useLoginMutation } from '@/hooks/queries/useUser';
import { loginState, userState } from '@/store/users';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import APIButton from '@/components/common/button/APIButton';

const SigninPage = () => {
  const router = useRouter();
  const setUserState = useSetRecoilState(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const setIsLogin = useSetRecoilState(loginState);
  const mutationLogin = useLoginMutation({
    onSuccess: () => {
      router.push('/');
      setIsLogin(true);
      const user = jwt.decode(localStorage.getItem('accessToken'));
      setUserState({
        id: user.user_id,
        nickname: user.nickname,
      });
    },
  });

  const moveToSignUp = () => {
    router.push('/register');
  };

  const moveToForgotPassword = () => {
    router.push('/password');
  };

  return (
    <AccountLayout>
      <LoginForm>
        <input
          {...register('email', {
            required: VALIDATION_ERROR_MSG.EMPTY_EMAIL,
          })}
          placeholder={'이메일'}
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password', {
            required: VALIDATION_ERROR_MSG.EMPTY_PASSWORD,
          })}
          type="password"
          placeholder={'비밀번호'}
        />
        <p>{errors.password?.message}</p>
        <LoginButton
          onClick={handleSubmit((data) => {
            mutationLogin.mutate({ email: data.email, password: data.password });
          })}
          isLoading={mutationLogin.isLoading}
        >
          {'로그인'}
        </LoginButton>
        <SignUpContainer>
          <u onClick={moveToForgotPassword}>비밀번호 찾기</u>
          <u onClick={moveToSignUp}>회원가입</u>{' '}
        </SignUpContainer>
      </LoginForm>
    </AccountLayout>
  );
};

const SignUpContainer = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 1em;
  u {
    color: ${({ theme }) => theme.pointColor};
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  input {
    font-size: 1rem;
    padding: 0.5em;
    border: none;
    border-radius: 0.3em;
    width: calc(100% - 1em);
    height: 30px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.backgrondLightColor};
    color: ${({ theme }) => theme.textColor};
    ::placeholder {
      color: darkgray;
      font-size: 0.8rem;
    }
    :focus {
      outline: none;
    }
  }
  p {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
    margin-left: 5px;
  }
`;

const LoginButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default SigninPage;
