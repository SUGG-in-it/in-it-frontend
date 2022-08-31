import ForgotPasswordFirstStep from '@/pages/ForgotPassword/ForgotPasswordFirstStep';
import ForgotPasswordSecondStep from '@/pages/ForgotPassword/ForgotPasswordSecondStep';
import { forgotPasswordState } from '@/store/users';
import { useRecoilValue } from 'recoil';

const ForgotPasswordPage = () => {
  const forgotPassword = useRecoilValue(forgotPasswordState);

  return forgotPassword.step === 1 ? <ForgotPasswordFirstStep /> : <ForgotPasswordSecondStep />;
};

export default ForgotPasswordPage;
