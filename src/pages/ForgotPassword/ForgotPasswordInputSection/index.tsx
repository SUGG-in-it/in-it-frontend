import ForgotPasswordFirstStep from '@/pages/ForgotPassword/ForgotPasswordInputSection/ForgotPasswordFirstStep';
import ForgotPasswordSecondStep from '@/pages/ForgotPassword/ForgotPasswordInputSection/ForgotPasswordSecondStep';
import { forgotPasswordState } from '@/store/users';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const ForgotPasswordInputSection = () => {
  const [forgotPassword, setforgotPassword] = useRecoilState(forgotPasswordState);

  return (
    <InputSection>
      {forgotPassword.step === 1 ? <ForgotPasswordFirstStep /> : <ForgotPasswordSecondStep />}
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ForgotPasswordInputSection;
