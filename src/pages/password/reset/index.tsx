import { media } from '@/styles/mediaQuery';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import { useResetPasswordMutation } from '@/hooks/queries/useUser';
import APIButton from '@/components/common/Button/APIButton';
import { emailState } from '@/store/atoms/users';
import AccountLayout from '@/layouts/AccountLayout';

const PasswordResetPage = () => {
  const router = useRouter();
  const [email, setEmail] = useRecoilState(emailState);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const mutationResetPassword = useResetPasswordMutation({
    onSuccess: () => {
      router.push('/signin');
      setEmail({
        register: '',
        password: '',
      });
    },
  });

  return (
    <AccountLayout>
      <ForgotPasswordWrapper>
        <PasswordForm>
          <input
            {...register('password', {
              required: VALIDATION_ERROR_MSG.EMPTY_EMAIL,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: VALIDATION_ERROR_MSG.INVALID_PASSWORD,
              },
            })}
            title={'password'}
            type="password"
            placeholder={'비밀번호'}
          />
          <p>{errors.password?.message}</p>
          <input
            {...register('confirmPassword', {
              required: VALIDATION_ERROR_MSG.EMPTY_PASSWORD,
              validate: (value) => value === getValues().password || VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD,
            })}
            title={'password confirm'}
            type="password"
            placeholder={'비밀번호 확인'}
          />
          <p>{errors.confirmPassword?.message}</p>
          <ResetButton
            onClick={handleSubmit((data) => {
              mutationResetPassword.mutate({ email: email.password, password: data.password });
            })}
            isLoading={mutationResetPassword.isLoading}
          >
            {'비밀번호 변경'}
          </ResetButton>
        </PasswordForm>
      </ForgotPasswordWrapper>
    </AccountLayout>
  );
};

const ForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  ${media.mobile} {
    width: 300px;
    margin: 0 auto;
  }
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
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

const ResetButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default PasswordResetPage;
