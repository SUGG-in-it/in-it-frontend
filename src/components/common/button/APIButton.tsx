import PulseLoading from '@/components/common/Loading';
import styled from 'styled-components';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
}

const ButtonWrapper = styled.button<{ isLoading: boolean }>`
  border: none;
  color: #fff;
  background-color: ${({ isLoading, theme }) => (isLoading ? '#DEE2E6' : theme.primaryColor)};
  font-size: 1rem;
  padding: 0.5em;
  margin: 0.5em 0em;
  height: 50px;
  border-radius: 0.3em;
  font-weight: bold;
  &:hover {
    cursor: ${({ isLoading }) => (isLoading ? '' : 'pointer')};
  }
`;

const APIButton = ({ children, onClick, className, isLoading }: ButtonProps) => {
  return (
    <ButtonWrapper {...{ className, isLoading, onClick }} disabled={isLoading} type={'button'}>
      {isLoading ? <PulseLoading /> : children}
    </ButtonWrapper>
  );
};

export default APIButton;
