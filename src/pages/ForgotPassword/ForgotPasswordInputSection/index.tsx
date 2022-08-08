import ForgotPasswordFirstStep from '@/pages/ForgotPassword/ForgotPasswordInputSection/ForgotPasswordFirstStep';
import ForgotPasswordSecondStep from '@/pages/ForgotPassword/ForgotPasswordInputSection/ForgotPasswordSecondStep';
import { useState } from 'react';
import styled from 'styled-components';

const ForgotPasswordInputSection = () => {
  const [signUpStep, setSignUpStep] = useState(1);

  const handleNextStep = () => {
    setSignUpStep(2);
  };

  return (
    <InputSection>
      {signUpStep === 1 ? <ForgotPasswordFirstStep handleNextStep={handleNextStep} /> : <ForgotPasswordSecondStep />}
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ForgotPasswordInputSection;
