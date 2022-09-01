import { resetPassword } from '@/api/users';
import Button from '@/components/common/Button';
import ValidationInput from '@/components/common/Input/ValidationInput';
import useValidationInput from '@/hooks/useValidationInput';
import { forgotPasswordState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
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
    <ForgotPasswordWrapper>
      <ValidationInput
        type={'password'}
        placeholder={'비밀번호를 입력해주세요'}
        value={password.value}
        onChange={password.onChange}
        isValid={password.isValid}
        msg={VALIDATION_ERROR_MSG.INVALID_PASSWORD}
      />
      <ValidationInput
        type={'password'}
        placeholder={'비밀번호를 다시 입력해주세요'}
        value={rePassword.value}
        onChange={rePassword.onChange}
        isValid={rePassword.isValid}
        msg={VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD}
      />
      <PostButton onClick={handleChangePassword}>{'비밀번호 변경'}</PostButton>
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

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2em;
`;

export default ForgotPasswordSecondStep;
