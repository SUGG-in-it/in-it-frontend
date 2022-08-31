import { resetPassword } from '@/api/users';
import Button from '@/components/Button';
import LabelInput from '@/components/Input/LabelInput';
import ValidationInput from '@/components/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';
import { forgotPasswordState } from '@/store/users';
import { validatePassword, validateRePassword, VALIDATION_ERROR_MSG } from '@/utils/validations';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordSecondStep = () => {
  const password = useValidationInput('', validatePassword);
  const rePassword = useValidationInput('', validateRePassword);

  const forgotPassword = useRecoilValue(forgotPasswordState);

  const handleChangePassword = async () => {
    if (password.isValid && rePassword.isValid) {
      await resetPassword({
        email: forgotPassword.email,
        password: password.value,
      });
    }
  };

  return (
    <>
      <LabelInput label="비밀번호">
        <ValidationInput
          type={'password'}
          value={password.value}
          onChange={password.onChange}
          isValid={password.isValid}
          msg={VALIDATION_ERROR_MSG.INVALID_PASSWORD}
        />
      </LabelInput>
      <LabelInput label="비밀번호 확인">
        <ValidationInput
          type={'password'}
          value={rePassword.value}
          onChange={rePassword.onChange}
          isValid={rePassword.isValid}
          msg={VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD}
        />
      </LabelInput>
      <PostButton onClick={handleChangePassword}>{'비밀번호 변경'}</PostButton>
    </>
  );
};

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
`;

export default ForgotPasswordSecondStep;
