import SignUpFirstStep from '@/pages/Signup/SignUpFirstStep';
import SignUpSecondStep from '@/pages/Signup/SignUpSecondStep';
import { signUpState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const SignUpPage = () => {
  const signUp = useRecoilValue(signUpState);

  return <SignUpWrapper>{signUp.step === 1 ? <SignUpFirstStep /> : <SignUpSecondStep />}</SignUpWrapper>;
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  ${media.mobile} {
    width: 300px;
    margin: 0 auto;
  }
`;

export default SignUpPage;
