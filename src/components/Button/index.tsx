import { MouseEventHandler } from 'react';
import styled from 'styled-components';
export interface ButtonProps extends React.HTMLAttributes<Element> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  color: string;
  children: React.ReactNode;
}

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  border: none;
  color: white;
  width: 19em;
  height: 3em;
  font-size: 1rem;
  padding: 0.5em;
  margin: 3em 0em;
  margin: 3em 0em;
  border-radius: 0.3em;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...props }: ButtonProps) => <ButtonWrapper {...props}>{children}</ButtonWrapper>;

export default Button;
