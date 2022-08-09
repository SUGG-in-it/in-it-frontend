import { MouseEventHandler } from 'react';
import styled from 'styled-components';
export interface ButtonProps extends React.HTMLAttributes<Element> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  color?: string;
  children: React.ReactNode;
  margin?: string;
  className?: string;
}

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  border: none;
  color: white;
  width: 19em;
  height: 3em;
  font-size: 1rem;
  padding: 0.5em;
  margin: ${({ margin }) => margin};
  border-radius: 0.3em;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, onClick, ...props }: ButtonProps) => (
  <ButtonWrapper onClick={onClick} {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;
