import { ReactElement } from 'react';
import styled from 'styled-components';

interface LabelInputProps {
  label: string;
  children: ReactElement;
  className?: string;
}

const LabelInput = ({ label, children, className }: LabelInputProps) => {
  return (
    <LabelInputContainer className={className}>
      <Label>{label}</Label>
      {children}
    </LabelInputContainer>
  );
};

const LabelInputContainer = styled.div`
  margin-bottom: 0.5em;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 0.5em;
  font-weight: 800;
`;

export default LabelInput;
