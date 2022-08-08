import { validateCode, validateEmail, validatePassword } from '@/utils/validations';
import { useState } from 'react';
export interface useInputType {
  value: string | number;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isError?: boolean;
  msg: string;
}

const validationInput = (type: string, value: string) => {
  switch (type) {
    case 'email':
      return validateEmail(value);
    case 'password':
      return validatePassword(value);
    case 'code':
      return validateCode(value);
  }
};

const useInput = (initialValue: string | number, type: string): useInputType => {
  const [value, setValue] = useState(initialValue);
  const [isError, setIsError] = useState(true);
  const [msg, setMsg] = useState('');
  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    const { isError, msg } = validationInput(type, value);
    setIsError(isError);
    setMsg(msg);
    setValue(value);
  };

  return { value, onChange, setValue, isError, msg };
};

export default useInput;
