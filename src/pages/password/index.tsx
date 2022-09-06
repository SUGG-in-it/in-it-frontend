import ForgotPasswordFirstStep from '@/components/password/ForgotPasswordFirstStep';
import ForgotPasswordSecondStep from '@/components/password/ForgotPasswordSecondStep';
import { forgotPasswordState } from '@/store/users';
import { useRecoilValue } from 'recoil';
import AccountLayout from '@/components/layouts/AccountLayout';

const ForgotPasswordPage = () => {
  const forgotPassword = useRecoilValue(forgotPasswordState);

  return (
    <AccountLayout>
      {forgotPassword.step === 1 ? <ForgotPasswordFirstStep /> : <ForgotPasswordSecondStep />}
    </AccountLayout>
  );
};

export default ForgotPasswordPage;
