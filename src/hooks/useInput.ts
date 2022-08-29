import { useState } from 'react';
export interface UseInputReturn {
  value: string;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    setValue(value);
  };

  return { value, onChange, setValue };
};

export default useInput;
