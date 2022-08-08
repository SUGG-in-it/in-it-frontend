import { atom } from 'recoil';

export const signUpState = atom({
  key: 'signUp',
  default: {
    email: '',
    step: 1,
  },
});

export const forgotPasswordState = atom({
  key: 'forgotPassword',
  default: {
    email: '',
    step: 1,
  },
});
