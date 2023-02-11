import { useSendMutation, useVerifyMutation } from '@/hooks/queries/useAuth';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import { signUpState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import APIButton from '@/components/common/button/APIButton';

const RegisterFirstStep = () => {
  const [isSentCode, setIsSentCode] = useState(false);
  const setSignUp = useSetRecoilState(signUpState);

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

  const mutationVerifyCode = useVerifyMutation({
    onSuccess: () => {
      setSignUp({
        step: 2,
        email: getValues().email,
      });
    },
  });

  const mutationSendCode = useSendMutation({
    onSuccess: () => {
      setIsSentCode(true);
    },
  });

  const sendEmail = () => {
    const email = getValues().email;
    mutationSendCode.mutate({ email, type: 'join' });
  };

  return (
    <SignUpWrapper>
      {!isSentCode ? (
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
      ) : (
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
              mutationVerifyCode.mutate({ email: data.email, code: data.code });
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
      )}
    </SignUpWrapper>
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

const SendButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

const VerifyButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default RegisterFirstStep;
