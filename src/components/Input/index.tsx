import styled from 'styled-components';

export interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputWrapper = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  border: none;
  border-radius: 0.3em;
  width: calc(100% - 1em);
  height: 30px;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: ${({ theme }) => theme.textColor};
  ::placeholder {
    color: darkgray;
    font-size: 0.8rem;
  }
  :focus {
    outline: none;
  }
`;

const Input = ({ type, placeholder, className, value, onChange }: InputProps) => (
  <InputWrapper {...{ type, placeholder, className, value, onChange }} />
);

export default Input;
