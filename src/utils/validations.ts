const REGULAR_EXPRESSION = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  NICKNAME: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
});

export enum VALIDATION_ERROR_MSG {
  EMPTY_EMAIL = '이메일을 입력해주세요.',
  EMPTY_PASSWORD = '비밀번호를 입력해주세요.',
  EMPTY_CODE = '인증번호를 입력해주세요.',
  EMPTY_NICKNAME = '닉네임을 입력해주세요.',
  EMPTY_WORK_POSITION = '직무를 입력해주세요.',
  INVALID_EMAIL = '올바른 형식의 이메일을 입력해주세요.',
  INVALID_PASSWORD = '최소 8자리 이상 영문, 숫자, 특수문자가 각각 1개 이상을 입력해주세요.',
  INVALID_NICKNAME = '2자 이상 16자 이하, 영어 또는 숫자 또는 한글을 입력해주세요.',
  INCONSISTENCY_PASSWORD = '비밀번호가 불일치 합니다',
}

export const validateLoginEmail = (email: string): boolean => {
  return email.trim() !== '';
};

export const validateLoginPwd = (password: string): boolean => {
  return password.trim() !== '';
};

export const validateSingupEmail = (email: string): boolean => {
  return REGULAR_EXPRESSION.EMAIL.test(email);
};

export const validatePassword = (password: string): boolean => {
  return REGULAR_EXPRESSION.PASSWORD.test(password);
};

export const validateCode = (code: string): boolean => {
  return code.trim() !== '';
};

export const validateNickName = (nickname: string): boolean => {
  return nickname.trim() !== '';
};

export const validateRePassword = (password: string, rePassword: string): boolean => {
  return rePassword === password;
};

export const validateWorkPostion = (workPoistion: string): boolean => {
  return workPoistion.trim() !== '';
};

export const validateQuestionTitle = (title: string): boolean => {
  return title.trim() !== '';
};
