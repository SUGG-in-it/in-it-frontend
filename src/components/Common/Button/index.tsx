import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { PointColor } from '../../../assets/colors';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  text: string;
};

const Wrapper = styled.button`
  background-color: ${PointColor};
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
`;

const Button = ({ onClick, type = 'button', text }: ButtonProps) => <Wrapper {...{ onClick, type }}>{text}</Wrapper>;

export default Button;
