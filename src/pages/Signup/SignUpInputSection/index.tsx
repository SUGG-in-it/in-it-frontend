import SignUpFirstStep from '@/pages/SignUp/SignUpInputSection/SignUpFirstStep';
import SignUpSecondStep from '@/pages/SignUp/SignUpInputSection/SignUpSecondStep';
import { useState } from 'react';
import styled from 'styled-components';

const SignUpInputSection = () => {
  const [signUpStep, setSignUpStep] = useState(1);

  const handleNextStep = () => {
    setSignUpStep(2);
  };

  return (
    <InputSection>
      {signUpStep === 1 ? <SignUpFirstStep handleNextStep={handleNextStep} /> : <SignUpSecondStep />}
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default SignUpInputSection;
