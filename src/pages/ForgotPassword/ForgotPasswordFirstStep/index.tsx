import { sendCode, verifyCode } from '@/api/auth';
import Button from '@/components/common/Button';
import ValidationInput from '@/components/common/Input/ValidationInput';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import useValidationInput, { UseValidationInputReturn } from '@/hooks/useValidationInput';
import { forgotPasswordState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { successToast } from '@/utils/toastUtils';
import { validateCode, validateLoginEmail, VALIDATION_ERROR_MSG } from '@/utils/validations';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordFirstStep = () => {
  const email = useValidationInput('', validateLoginEmail);
  const code = useValidationInput('', validateCode);
  const [isSentCode, setIsSentCode] = useState(false);
  const setforgotPassword = useSetRecoilState(forgotPasswordState);

  const resendCode = () => {
    sendCode(email.value);
    successToast(`${email.value}로 이메일을 전송하였습니다.`);
  };

  const mutationCheckEmail = useEmailCheckMutation({
    onSuccess: () => {
      sendCode(email.value);
      successToast(`${email.value}로 이메일을 전송하였습니다.`);
      setIsSentCode(true);
    },
  });

  const handleSendCode = async (email: UseValidationInputReturn) => {
    if (email.isValid) {
      mutationCheckEmail.mutate(email.value);
    }
  };

  const handleVerifyCode = async (code: UseValidationInputReturn) => {
    if (code.isValid) {
      await verifyCode({ email: email.value, code: code.value });
      setforgotPassword({
        email: email.value,
        step: 2,
      });
    }
  };

  return (
    <ForgotPasswordWrapper>
      {!isSentCode ? (
        <>
          <ValidationInput
            type={'email'}
            placeholder={'이메일을 입력해주세요'}
            value={email.value}
            onChange={email.onChange}
            isValid={email.isValid}
            msg={VALIDATION_ERROR_MSG.INVALID_EMAIL}
          />
          <SendButton onClick={() => handleSendCode(email)}>{'인증번호 전송'}</SendButton>
        </>
      ) : (
        <>
          <ValidationInput
            type={'text'}
            placeholder={'인증번호를 입력해주세요'}
            value={code.value}
            onChange={code.onChange}
            isValid={code.isValid}
            msg={VALIDATION_ERROR_MSG.EMPTY_PASSWORD}
          />
          <VerifyButton onClick={() => handleVerifyCode(code)}>{'확인'}</VerifyButton>
        </>
      )}
      <ResencContainer>
        <span>메일을 받지 못하셨습니까?</span>
        <u onClick={resendCode}>재전송 하기</u>
      </ResencContainer>
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

const ResencContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  span {
    color: white;
    font-size: 0.9rem;
  }
  u {
    color: white;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
  ${media.tablet} {
    span {
      color: ${({ theme }) => theme.pointColor};
    }
    u {
      color: ${({ theme }) => theme.pointColor};
    }
  }
`;

const SendButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
`;

const VerifyButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 3em;
`;

export default ForgotPasswordFirstStep;
