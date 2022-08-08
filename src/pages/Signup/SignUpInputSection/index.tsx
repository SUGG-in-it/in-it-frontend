import SignUpFirstStep from '@/pages/SignUp/SignUpInputSection/SignUpFirstStep';
import SignUpSecondStep from '@/pages/SignUp/SignUpInputSection/SignUpSecondStep';
import { signUpState } from '@/store/users';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const SignUpInputSection = () => {
  const [signUp, setSignUp] = useRecoilState(signUpState);

  return <InputSection>{signUp.step === 1 ? <SignUpFirstStep /> : <SignUpSecondStep />}</InputSection>;
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default SignUpInputSection;
