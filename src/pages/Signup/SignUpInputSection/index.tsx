import SignUpFirstStep from '@/pages/SignUp/SignUpInputSection/SignUpFirstStep';
import SignUpSecondStep from '@/pages/SignUp/SignUpInputSection/SignUpSecondStep';
import SignUpStep from '@/pages/SignUp/SignUpInputSection/SignUpStep';
import SignUpThirdStep from '@/pages/SignUp/SignUpInputSection/SignUpThirdStep';
import { useState } from 'react';
import styled from 'styled-components';

const getSignUpInput = (step: number, handleNextStep: (step) => void) => {
  if (step === 1) return <SignUpFirstStep handleNextStep={() => handleNextStep(step)}></SignUpFirstStep>;
  if (step === 2) return <SignUpSecondStep></SignUpSecondStep>;
  if (step === 3) return <SignUpThirdStep></SignUpThirdStep>;
};

const SignUpInputSection = () => {
  const [signUpStep, setSignUpStep] = useState(1);
  console.log(signUpStep);

  const handleNextStep = (signUpStep) => {
    setSignUpStep(signUpStep + 1);
  };

  return (
    <InputSection>
      <SignUpStep step={signUpStep} />
      {getSignUpInput(signUpStep, handleNextStep)}
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default SignUpInputSection;
