import { sendCode } from '@/api/auth';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import { useVerifyMutation } from '@/hooks/queries/useAuth';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import { forgotPasswordState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { successToast } from '@/utils/toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordFirstStep = () => {
  const [isSentCode, setIsSentCode] = useState(false);
  const setforgotPassword = useSetRecoilState(forgotPasswordState);

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
      setforgotPassword({
        email: getValues().email,
        step: 2,
      });
    },
  });

  const mutationCheckEmail = useEmailCheckMutation({
    onSuccess: () => {
      sendEmail();
    },
  });

  const sendEmail = () => {
    const email = getValues().email;
    sendCode(email);
    successToast(`${email}로 이메일을 전송하였습니다.`);
    setIsSentCode(true);
  };

  return (
    <ForgotPasswordWrapper>
      {!isSentCode ? (
        <>
          <SendEmailForm
            onSubmit={handleSubmit((data) => {
              mutationCheckEmail.mutate(data.email);
            })}
          >
            <input
              {...register('email', {
                required: VALIDATION_ERROR_MSG.EMPTY_EMAIL,
                pattern: {
                  value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                  message: VALIDATION_ERROR_MSG.INVALID_EMAIL,
                },
              })}
              placeholder={'이메일'}
            />
            <p>{errors.email?.message}</p>
            <SendButton>인증번호 전송</SendButton>
          </SendEmailForm>
        </>
      ) : (
        <SendEmailForm
          onSubmit={handleSubmit((data) => {
            mutationVerifyCode.mutate({ email: data.email, code: data.code });
          })}
        >
          <input
            {...register('code', {
              required: VALIDATION_ERROR_MSG.EMPTY_CODE,
            })}
            placeholder={'인증번호'}
          />
          <p>{errors.code?.message}</p>
          <SendButton>확인</SendButton>
          <ResendContainer>
            <span>메일을 받지 못하셨습니까?</span>
            <u onClick={sendEmail}>재전송 하기</u>
          </ResendContainer>
        </SendEmailForm>
      )}
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

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
  border: none;
  height: 50px;
  color: white;
  border-radius: 3px;
  margin-top: 20px;
`;

export default ForgotPasswordFirstStep;
