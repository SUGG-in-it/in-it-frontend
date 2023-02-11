import { ReactElement } from 'react';
import styled from 'styled-components';

interface LabelInputProps {
  label: string;
  children: ReactElement;
  className?: string;
  htmlFor: string;
}

const LabelInput = ({ label, children, className, htmlFor}: LabelInputProps) => {
  return (
    <LabelInputContainer className={className}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </LabelInputContainer>
  );
};

const LabelInputContainer = styled.div`
  margin-bottom: 0.5em;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 0.5em;
  font-weight: 800;
`;

export default LabelInput;
