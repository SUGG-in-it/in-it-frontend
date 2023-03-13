import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const emailState = atom({
  key: 'email',
  default: {
    register: '',
    password: '',
  },
});

export const loginState = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: 'user',
  default: {
    nickname: '',
    id: '',
  },
  effects_UNSTABLE: [persistAtom],
});
