import { sendCode, verifyCode } from '@/api/auth';
import Button from '@/components/Button';
import LabelInput from '@/components/Input/LabelInput';
import ValidationInput from '@/components/Input/ValidationInput';
import { useEmailCheckMutation } from '@/hooks/queries/useUser';
import useValidationInput, { UseValidationInputReturn } from '@/hooks/useValidationInput';
import { signUpState } from '@/store/users';
import { successToast } from '@/utils/toastUtils';
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
      await verifyCode({ email: email.value, code: code.value });
      setSignUp({
        step: 2,
        email: email.value,
      });
    }
  };

  return (
    <>
      {!isSentCode ? (
        <>
          <LabelInput label="이메일">
            <ValidationInput
              type={'email'}
              value={email.value}
              onChange={email.onChange}
              isValid={email.isValid}
              msg={VALIDATION_ERROR_MSG.INVALID_EMAIL}
            />
          </LabelInput>
          <SendButton onClick={() => handleSendCode(email)}>{'인증번호 전송'}</SendButton>
        </>
      ) : (
        <>
          <InputCode isSentCode={isSentCode}>
            <LabelInput label="인증번호">
              <ValidationInput
                type={'text'}
                value={code.value}
                onChange={code.onChange}
                isValid={code.isValid}
                msg={VALIDATION_ERROR_MSG.EMPTY_PASSWORD}
              />
            </LabelInput>
            <VerifyButton onClick={() => handleVerifyCode(code)}>{'확인'}</VerifyButton>
          </InputCode>
        </>
      )}
      <ResencContainer>
        <span>메일을 받지 못하셨습니까?</span>
        <u onClick={resendCode}>재전송 하기</u>
      </ResencContainer>
    </>
  );
};

const InputCode = styled.div`
  visibility: ${({ isSentCode }) => (isSentCode ? 'visible' : 'hidden')};
  button {
    width: 100%;
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
