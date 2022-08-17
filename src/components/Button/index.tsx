import { PointColor } from '@/assets/colors';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';
export interface ButtonProps extends React.HTMLAttributes<Element> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ButtonWrapper = styled.button<ButtonProps>`
  border: none;
  color: white;
  background-color: ${PointColor};
  font-size: 1rem;
  padding: 0.5em;
  margin: 0.5em 0em;
  border-radius: 0.3em;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonWrapper onClick={onClick} type={'button'}>
    {children}
  </ButtonWrapper>
);

export default Button;
