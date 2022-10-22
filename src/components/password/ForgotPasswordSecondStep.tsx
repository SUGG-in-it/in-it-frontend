import { resetPassword } from '@/api/users';
import { forgotPasswordState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';

const ForgotPasswordSecondStep = () => {
  const router = useRouter();
  const forgotPassword = useRecoilValue(forgotPasswordState);

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

  const handleChangePassword = async () => {
    await resetPassword({
      email: forgotPassword.email,
      password: getValues().password,
    });
    router.push('/login');
  };

  return (
    <ForgotPasswordWrapper>
      <PasswordForm onSubmit={handleSubmit(handleChangePassword)}>
        <input
          {...register('password', {
            required: VALIDATION_ERROR_MSG.EMPTY_EMAIL,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: VALIDATION_ERROR_MSG.INVALID_PASSWORD,
            },
          })}
          type="password"
          placeholder={'비밀번호'}
        />
        <p>{errors.password?.message}</p>
        <input
          {...register('confirmPassword', {
            required: VALIDATION_ERROR_MSG.EMPTY_PASSWORD,
            validate: (value) => value === getValues().password || VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD,
          })}
          type="password"
          placeholder={'비밀번호 확인'}
        />
        <p>{errors.confirmPassword?.message}</p>
        <ResetButton>{'비밀번호 변경'}</ResetButton>
      </PasswordForm>
    </ForgotPasswordWrapper>
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

const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
  border: none;
  height: 50px;
  color: white;
  border-radius: 3px;
  margin-top: 20px;
`;

export default ForgotPasswordSecondStep;
