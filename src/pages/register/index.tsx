import AccountLayout from '@/components/layouts/AccountLayout';
import SignUpFirstStep from '@/components/register/SignUpFirstStep';
import SignUpSecondStep from '@/components/register/SignUpSecondStep';
import { signUpState } from '@/store/users';
import { useRecoilValue } from 'recoil';

const SignUpPage = () => {
  const signUp = useRecoilValue(signUpState);

  return <AccountLayout>{signUp.step === 1 ? <SignUpFirstStep /> : <SignUpSecondStep />}</AccountLayout>;
};

export default SignUpPage;
