import { atom } from 'recoil';

export const signUpState = atom({
  key: 'signUp',
  default: {
    email: '',
    step: 1,
  },
});
