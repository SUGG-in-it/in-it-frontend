import styled from 'styled-components';

export interface InputProps extends React.HTMLAttributes<Element> {
  label: string;
  type: 'email' | 'text' | 'password';
  placeholder: string;
}

const InputContainer = styled.div`
  margin: 10px 0px;
  p {
    margin-bottom: 0.5em;
  }
`;

const InputWrapper = styled.input<InputProps>`
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

const Input = ({ label, type, placeholder }: InputProps) => (
  <InputContainer>
    <p>{label}</p>
    <InputWrapper type={type} placeholder={placeholder}></InputWrapper>
  </InputContainer>
);

export default Input;
