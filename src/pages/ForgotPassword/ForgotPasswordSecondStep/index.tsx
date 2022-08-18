import { resetPassword } from '@/api/users';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ValidationInput from '@/components/Input/ValidationInput';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import { forgotPasswordState } from '@/store/users';
import { validateRePassword } from '@/utils/validations';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordSecondStep = () => {
  const password = useValidationInput('', 'password');
  const rePassword = useInput('');
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState('');
  const [forgotPassword, setforgotPassword] = useRecoilState(forgotPasswordState);

  const validationCheck = () => {
    const { isError, msg } = validateRePassword(password.value, rePassword.value);
    setRePasswordErrorMsg(msg);
    if (password.isError || isError) return false;
    return true;
  };

  const handleChangePassword = async () => {
    if (validationCheck())
      await resetPassword({
        email: forgotPassword.email,
        password: password.value,
      });
  };

  return (
    <>
      <ValidationInput input={password} label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Input input={rePassword} label="비밀번호 확인" type="password" placeholder="비밀번호 확인을 입력해주세요." />
      <ErrorMessage>{rePasswordErrorMsg}</ErrorMessage>
      <Button onClick={handleChangePassword}>{'비밀번호 변경'}</Button>
    </>
  );
};

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-bottom: 1em;
`;

export default ForgotPasswordSecondStep;
