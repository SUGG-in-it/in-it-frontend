import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const forgotPasswordState = atom({
  key: 'forgotPassword',
  default: {
    email: '',
    step: 1,
  },
});
