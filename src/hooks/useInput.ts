import { useState } from 'react';

export interface InputType {
  value: string | number;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
}

const useInput = (initialValue: string | number): InputType => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    setValue(value);
  };
  return { value, onChange };
};

export default useInput;
