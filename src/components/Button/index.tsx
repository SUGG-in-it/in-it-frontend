import { PointColor } from '@/assets/colors';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';
export interface ButtonProps extends React.HTMLAttributes<Element> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

const ButtonWrapper = styled.button<ButtonProps>`
  border: none;
  color: white;
  background-color: ${PointColor};
  font-size: 1rem;
  padding: 0.5em;
  margin: 0.5em 0em;
  height: 50px;
  border-radius: 0.3em;
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
