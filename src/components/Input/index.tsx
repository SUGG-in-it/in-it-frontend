import { useInputType } from '@/hooks/useInput';
import styled from 'styled-components';

export interface InputProps {
  input: useInputType;
  label: string;
  type: 'email' | 'text' | 'password';
  placeholder: string;
}

const InputContainer = styled.div`
  margin: 10px 0px;
`;

const Label = styled.p`
  margin-bottom: 0.5em;
  color: white;
`;

const InputWrapper = styled.input`
  font-size: 1rem;
  padding: 0.5em;
  border: none;
  border-radius: 0.3em;
  width: 18em;
  height: 1.5em;
  ::placeholder {
    color: darkgray;
    font-size: 0.8rem;
  }
  :focus {
    outline: none;
  }
`;

const Message = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-top: 0.5em;
`;

const Input = ({ input, label, type, placeholder }: InputProps) => (
  <InputContainer>
    <Label>{label}</Label>
    <InputWrapper type={type} placeholder={placeholder} value={input.value} onChange={input.onChange}></InputWrapper>
    <Message isError={input.isError}>{input.msg}</Message>
  </InputContainer>
);

export default Input;
