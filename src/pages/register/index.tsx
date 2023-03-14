import { useSendMutation } from '@/hooks/queries/useAuth';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import APIButton from '@/components/common/Button/APIButton';
import { useRouter } from 'next/router';
import AccountLayout from '@/layouts/AccountLayout';
import { useSetRecoilState } from 'recoil';
import { emailState } from '@/store/users';

const RegisterPage = () => {
  const router = useRouter();
  const setEmail = useSetRecoilState(emailState);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      code: '',
    },
  });

  const mutationCheckEmail = useEmailCheckMutation({
    onSuccess: () => {
      sendEmail();
    },
  });

  const mutationSendCode = useSendMutation({
    onSuccess: () => {
      setEmail({
        register: getValues().email,
        password: '',
      });
      router.push(`/register/email-verified`);
    },
  });

  const sendEmail = () => {
    const email = getValues().email;
    mutationSendCode.mutate({ email, type: 'join' });
  };

  return (
    <AccountLayout>
      <SignUpWrapper>
        <SendEmailForm>
          <input
            {...register('email', {
              required: VALIDATION_ERROR_MSG.EMPTY_EMAIL,
              pattern: {
                value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: VALIDATION_ERROR_MSG.INVALID_EMAIL,
              },
            })}
            title={'email'}
            placeholder={'이메일'}
          />
          <p>{errors.email?.message}</p>
          <SendButton
            onClick={handleSubmit((data) => {
              mutationCheckEmail.mutate(data.email);
            })}
            isLoading={mutationCheckEmail.isLoading || mutationSendCode.isLoading}
          >
            인증번호 전송
          </SendButton>
        </SendEmailForm>
      </SignUpWrapper>
    </AccountLayout>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  ${media.mobile} {
    width: 300px;
    margin: 0 auto;
  }
`;

const SendEmailForm = styled.form`
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

const SendButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default RegisterPage;
