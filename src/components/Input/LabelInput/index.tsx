import { ReactElement } from 'react';
import styled from 'styled-components';

interface LabelInputProps {
  label: string;
  children: ReactElement;
}

const LabelInput = ({ label, children }: LabelInputProps) => {
  return (
    <LabelInputContainer>
      <Label>{label}</Label>
      {children}
    </LabelInputContainer>
  );
};

const LabelInputContainer = styled.div`
  margin-bottom: 0.5em;
`;

const Label = styled.p`
  font-size: 0.8rem;
  color: white;
`;

export default LabelInput;
