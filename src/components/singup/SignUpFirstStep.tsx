import { sendCode } from '@/api/auth';
import Button from '@/components/common/button/Button';
import ValidationInput from '@/components/common/Input/ValidationInput';
import { useVerifyMutation } from '@/hooks/queries/useAuth';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import useValidationInput, { UseValidationInputReturn } from '@/hooks/useValidationInput';
import { signUpState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { successToast } from '@/utils/toast';
import { validateCode, validateSingupEmail, VALIDATION_ERROR_MSG } from '@/utils/validations';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const SignUpFirstStep = () => {
  const email = useValidationInput('', validateSingupEmail);
  const code = useValidationInput('', validateCode);
  const [isSentCode, setIsSentCode] = useState(false);
  const setSignUp = useSetRecoilState(signUpState);

  const mutationCheckEmail = useEmailCheckMutation({
    onSuccess: () => {
      sendCode(email.value);
      successToast(`${email.value}로 이메일을 전송하였습니다.`);
      setIsSentCode(true);
    },
  });

  const mutationVerifyCode = useVerifyMutation({
    onSuccess: () => {
      setSignUp({
        step: 2,
        email: email.value,
      });
    },
  });

  const resendCode = () => {
    sendCode(email.value);
    successToast(`${email.value}로 이메일을 전송하였습니다.`);
  };

  const handleSendCode = async (email: UseValidationInputReturn) => {
    if (email.isValid) {
      mutationCheckEmail.mutate(email.value);
    }
  };

  const handleVerifyCode = async (code: UseValidationInputReturn) => {
    if (code.isValid) {
      mutationVerifyCode.mutate({ email: email.value, code: code.value });
    }
  };

  return (
    <SignUpWrapper>
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
          <InputCode isSentCode={isSentCode}>
            <ValidationInput
              type={'text'}
              placeholder={'인증번호를 입력해주세요'}
              value={code.value}
              onChange={code.onChange}
              isValid={code.isValid}
              msg={VALIDATION_ERROR_MSG.EMPTY_PASSWORD}
            />
            <VerifyButton onClick={() => handleVerifyCode(code)}>{'확인'}</VerifyButton>
          </InputCode>
        </>
      )}
      <ResendContainer>
        <span>메일을 받지 못하셨습니까?</span>
        <u onClick={resendCode}>재전송 하기</u>
      </ResendContainer>
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

const InputCode = styled.div`
  visibility: ${({ isSentCode }) => (isSentCode ? 'visible' : 'hidden')};
  button {
    width: 100%;
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

const SendButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
`;

const VerifyButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 3em;
`;

export default SignUpFirstStep;
