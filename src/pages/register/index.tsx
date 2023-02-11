import withHead from '@/components/hoc/withHead';
import AccountLayout from '@/components/layouts/AccountLayout';
import RegisterFirstStep from '@/components/register/RegisterFirstStep';
import RegisterSecondStep from '@/components/register/RegisterSecondStep';
import { signUpState } from '@/store/users';
import { useRecoilValue } from 'recoil';

const RegisterPage = () => {
  const signUp = useRecoilValue(signUpState);

  return <AccountLayout>{signUp.step === 1 ? <RegisterFirstStep /> : <RegisterSecondStep />}</AccountLayout>;
};

export default withHead(RegisterPage,'init : 회원가입','');
