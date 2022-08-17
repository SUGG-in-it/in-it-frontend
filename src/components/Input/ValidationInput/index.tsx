import { useValidationInputType } from '@/hooks/useValidationInput';
import styled from 'styled-components';

export interface InputProps {
  input: useValidationInputType;
  label?: string;
  type: string;
  placeholder?: string;
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
  width: calc(100% - 1em);
  height: 30px;
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

const ValidationInput = ({ input, label, type, placeholder = '' }: InputProps) => (
  <InputContainer>
    {label && <Label>{label}</Label>}
    <InputWrapper type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
    {<Message isError={input.isError}>{input.msg}</Message>}
  </InputContainer>
);

export default ValidationInput;
