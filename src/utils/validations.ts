const REGULAR_EXPRESSION = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  NICKNAME: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
});

const VALIDATION_ERROR_MSG = Object.freeze({
  EMPTY_EMAIL: '이메일을 입력해주세요.',
  EMPTY_PASSWORD: '비밀번호를 입력해주세요.',
  EMPTY_CODE: '인증번호를 입력해주세요.',
  EMPTY_NICKNAME: '닉네임을 입력해주세요.',
  EMPTY_WORK_POSITION: '직무를 입력해주세요.',
  INVALID_EMAIL: '올바른 형식의 이메일을 입력해주세요.',
  INVALID_PASSWORD: '최소 8자리 이상 영문, 숫자, 특수문자가 각각 1개 이상을 입력해주세요.',
  INVALID_NICKNAME: '2자 이상 16자 이하, 영어 또는 숫자 또는 한글을 입력해주세요.',
  INCONSISTENCY_PASSWORD: '비밀번호가 불일치 합니다',
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

export const validateCode = (code: string): validationReturnType => {
  if (code.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_CODE };
  return { isError: false, msg: '' };
};

export const validateNickName = (nickname: string): validationReturnType => {
  if (nickname.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_NICKNAME };
  if (!REGULAR_EXPRESSION.NICKNAME.test(nickname)) return { isError: true, msg: VALIDATION_ERROR_MSG.INVALID_NICKNAME };
  return { isError: false, msg: '' };
};

export const validateRePassword = (password: string, rePassword: string): validationReturnType => {
  if (rePassword.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_PASSWORD };
  if (rePassword !== password) return { isError: true, msg: VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD };
  return { isError: false, msg: '' };
};

export const validateWorkPostion = (workPoistion: string): validationReturnType => {
  if (workPoistion.trim() === '') return { isError: true, msg: VALIDATION_ERROR_MSG.EMPTY_WORK_POSITION };
  return { isError: false, msg: '' };
};
