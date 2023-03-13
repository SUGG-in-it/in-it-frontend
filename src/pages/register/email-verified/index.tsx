import { useSendMutation, useVerifyMutation } from '@/hooks/queries/useAuth';
import { emailState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import APIButton from '@/components/common/Button/APIButton';
import { useRouter } from 'next/router';
import AccountLayout from '@/layouts/AccountLayout';

const EmailVerifiedPage = () => {
  const router = useRouter();
  const email = useRecoilValue(emailState);
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

  const mutationVerifyCode = useVerifyMutation({
    onSuccess: () => {
      router.push(`/register/info-form`);
    },
  });

  const mutationSendCode = useSendMutation();

  const sendEmail = () => {
    mutationSendCode.mutate({ email: email.register, type: 'join' });
  };

  return (
    <AccountLayout>
      <SignUpWrapper>
        <SendEmailForm>
          <input
            {...register('code', {
              required: VALIDATION_ERROR_MSG.EMPTY_CODE,
            })}
            title={'code'}
            placeholder={'인증번호'}
          />
          <p>{errors.code?.message}</p>
          <VerifyButton
            onClick={handleSubmit((data) => {
              mutationVerifyCode.mutate({ email: email.register, code: data.code });
            })}
            isLoading={mutationVerifyCode.isLoading}
          >
            확인
          </VerifyButton>
          <ResendContainer>
            <span>메일을 받지 못하셨습니까?</span>
            <u onClick={sendEmail}>재전송 하기</u>
          </ResendContainer>
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

const ResendContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  span {
    color: ${({ theme }) => theme.pointColor};
    font-size: 0.9rem;
  }
  u {
    color: ${({ theme }) => theme.pointColor};
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
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

const VerifyButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default EmailVerifiedPage;
