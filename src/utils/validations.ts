const REGULAR_EXPRESSION = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
});

const VALIDATION_ERROR_MSG = Object.freeze({
  EMPTY_EMAIL: '이메일을 입력해주세요.',
  EMPTY_PASSWORD: '비밀번호를 입력해주세요.',
  INVALID_EMAIL: '올바른 형식의 이메일을 입력해주세요.',
  INVALID_PASSWORD: '최소 8자리 이상 영문, 숫자, 특수문자가 각각 1개 이상을 입력해주세요.',
});

interface validationReturnType {
  isError: boolean;
  msg: string;
}

export const validateEmail = (email: string): validationReturnType => {
  if (email.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_EMAIL };
  if (!REGULAR_EXPRESSION.EMAIL.test(email)) return { isError: true, msg: VALIDATION_ERROR_MSG.INVALID_EMAIL };
  return { isError: false, msg: '' };
};

export const validatePassword = (password: string): validationReturnType => {
  if (password.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_PASSWORD };
  if (!REGULAR_EXPRESSION.PASSWORD.test(password)) return { isError: true, msg: VALIDATION_ERROR_MSG.INVALID_PASSWORD };
  return { isError: false, msg: '' };
};
