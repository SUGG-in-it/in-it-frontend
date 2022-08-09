import { atom } from 'recoil';

export const signUpState = atom({
  key: 'signUp',
  default: {
    email: '',
    step: 1,
  },
});

export const loginState = atom({
  key: 'isLogin',
  default: false,
});

export const forgotPasswordState = atom({
  key: 'forgotPassword',
  default: {
    email: '',
    step: 1,
  },
});
