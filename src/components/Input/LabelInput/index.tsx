import { ReactElement } from 'react';
import styled from 'styled-components';

interface LabelInputProps {
  label: string;
  children: ReactElement;
}

const LabelInput = ({ label, children }: LabelInputProps) => {
  return (
    <LabelInputContainer>
      <p>{label}</p>
      {children}
    </LabelInputContainer>
  );
};

const LabelInputContainer = styled.div``;

export default LabelInput;
