import { resetPassword } from '@/api/users';
import { PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ValidationInput from '@/components/Input/ValidationInput';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import { validateRePassword } from '@/utils/validations';
import { useState } from 'react';
import styled from 'styled-components';

const ForgotPasswordSecondStep = () => {
  const password = useValidationInput('', 'password');
  const rePassword = useInput('');
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState('');

  const validationCheck = () => {
    const { isError, msg } = validateRePassword(password.value, rePassword.value);
    setRePasswordErrorMsg(msg);
    if (password.isError || isError) return false;
    return true;
  };

  const handleChangePassword = async () => {
    if (validationCheck())
      await resetPassword({
        email: '',
        password: password.value,
      });
  };

  return (
    <InputSection>
      <ValidationInput input={password} label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Input input={rePassword} label="비밀번호 확인" type="password" placeholder="비밀번호 확인을 입력해주세요." />
      <ErrorMessage>{rePasswordErrorMsg}</ErrorMessage>
      <Button color={PointColor} onClick={handleChangePassword} margin={'3em 0em 1em'}>
        {'비밀번호 변경'}
      </Button>
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  select {
    font-size: 0.8rem;
    padding: 0.5em;
    border: none;
    border-radius: 0.3em;
    height: 3em;
    margin-bottom: 0.5em;
    width: 19rem;
    :focus {
      outline: none;
    }
  }
  option {
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-bottom: 1em;
`;

export default ForgotPasswordSecondStep;
