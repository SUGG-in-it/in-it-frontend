import { sendCode, verifyCode } from '@/api/auth';
import Button from '@/components/Button';
import ValidationInput from '@/components/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';
import { forgotPasswordState } from '@/store/users';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordFirstStep = () => {
  const email = useValidationInput('', 'email');
  const code = useValidationInput('', 'code');
  const [isSentCode, setIsSentCode] = useState(false);
  const setforgotPassword = useSetRecoilState(forgotPasswordState);

  const handleSendCode = async (email) => {
    if (email.isError) return;
    await sendCode(email);
    setIsSentCode(true);
  };

  const handleVerifyCode = async (code) => {
    if (code.isError) return;
    await verifyCode(code);
    setforgotPassword({
      email: email.value,
      step: 2,
    });
  };

  return (
    <>
      <ValidationInput input={email} label="이메일" type="email" placeholder="이메일을 입력해주세요." />
      <Button onClick={() => handleSendCode(email)}>{'인증번호 전송'}</Button>
      <InputCode isSentCode={isSentCode}>
        <ValidationInput input={code} label="인증번호" type="text" placeholder="인증번호" />
        <Button onClick={() => handleVerifyCode(code)}>{'확인'}</Button>
      </InputCode>
    </>
  );
};

const InputCode = styled.div`
  visibility: ${({ isSentCode }) => (isSentCode ? 'visible' : 'hidden')};
`;

export default ForgotPasswordFirstStep;
