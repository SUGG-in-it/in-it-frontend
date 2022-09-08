import { sendCode, verifyCode } from '@/api/auth';
import Button from '@/components/common/button/Button';
import ValidationInput from '@/components/common/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';
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

  const handleResendCode = async () => {
    await sendCode(email.value);
    successToast(`${email.value}로 이메일을 전송하였습니다.`);
  };

  const handleSendCode = async () => {
    if (email.isValid) {
      await sendCode(email.value);
      successToast(`${email.value}로 이메일을 전송하였습니다.`);
      setIsSentCode(true);
    }
  };

  const handleVerifyCode = async () => {
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
          <SendButton onClick={handleSendCode}>{'인증번호 전송'}</SendButton>
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
          <VerifyButton onClick={handleVerifyCode}>{'확인'}</VerifyButton>
        </>
      )}
      <ResencContainer>
        <span>메일을 받지 못하셨습니까?</span>
        <u onClick={handleResendCode}>재전송 하기</u>
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

const SendButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
`;

const VerifyButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 3em;
`;

export default ForgotPasswordFirstStep;
