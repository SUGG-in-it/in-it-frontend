import styled from 'styled-components';
export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
}

const ButtonWrapper = styled.button<ButtonProps>`
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.pointColor};
  font-size: 1rem;
  padding: 0.5em;
  margin: 0.5em 0em;
  height: 50px;
  border-radius: 0.3em;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, onClick, className }: ButtonProps) => (
  <ButtonWrapper onClick={onClick} type={'button'} className={className}>
    {children}
  </ButtonWrapper>
);

export default Button;
