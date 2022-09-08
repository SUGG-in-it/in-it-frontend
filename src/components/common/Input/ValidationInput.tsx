import { InputProps } from '@/components/common/Input/Input';
import styled from 'styled-components';

interface ValidationInputProps extends InputProps {
  isValid: undefined | boolean;
  msg: string;
}

const InputContainer = styled.div`
  margin: 10px 0px;
`;

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

const Message = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-top: 0.5em;
`;

const ValidationInput = ({ type, placeholder, className, value, onChange, isValid, msg }: ValidationInputProps) => {
  return (
    <InputContainer>
      <InputWrapper {...{ type, placeholder, className, value, onChange }} />
      {isValid !== null && isValid === false ? <Message>{msg}</Message> : null}
    </InputContainer>
  );
};

export default ValidationInput;
