import { UseInputReturn } from '@/hooks/useInput';
import { useState } from 'react';
export interface UseValidationInputReturn extends UseInputReturn {
  isValid: boolean | null;
  checkValidation: () => void;
}

const useValidationInput = (
  initialValue: string,
  validate: (value: string, extraValue?: string) => boolean,
  extraValue?: string
): UseValidationInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(null);

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    if (extraValue) {
      setIsValid(validate(value, extraValue));
    } else {
      setIsValid(validate(value));
    }
    setValue(value);
  };

  const checkValidation = () => {
    if (extraValue) {
      setIsValid(validate(value, extraValue));
    } else {
      setIsValid(validate(value));
    }
  };

  return { value, onChange, setValue, isValid, checkValidation };
};

export default useValidationInput;
