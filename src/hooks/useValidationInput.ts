import { UseInputReturn } from '@/hooks/useInput';
import { useState } from 'react';
export interface UseValidationInputReturn extends UseInputReturn {
  isValid: boolean | null;
}

const useValidationInput = (initialValue: string, validate: (value: string) => boolean): UseValidationInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    setIsValid(validate(value));
    setValue(value);
  };

  return { value, onChange, setValue, isValid };
};

export default useValidationInput;
