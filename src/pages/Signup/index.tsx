import SignUpFirstStep from '@/pages/Signup/SignUpFirstStep';
import SignUpSecondStep from '@/pages/Signup/SignUpSecondStep';
import { signUpState } from '@/store/users';
import { useRecoilValue } from 'recoil';

const SignUpPage = () => {
  const signUp = useRecoilValue(signUpState);

  return signUp.step === 1 ? <SignUpFirstStep /> : <SignUpSecondStep />;
};

export default SignUpPage;
