import { useState } from 'react';

export interface InputType {
  value: string | number;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInput = (initialValue: string | number): InputType => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export default useInput;
