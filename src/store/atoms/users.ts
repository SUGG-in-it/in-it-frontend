import { KEYS } from '@/constants/atomKey';
import localStorageEffect from '@/store/effects/localStorageEffect';
import { atom } from 'recoil';

export const emailState = atom({
  key: KEYS.EMAIL,
  default: {
    register: '',
    password: '',
  },
  effects: [localStorageEffect(KEYS.EMAIL)],
});

export const loginState = atom({
  key: KEYS.IS_LOGIN,
  default: false,
  effects: [localStorageEffect(KEYS.IS_LOGIN)],
});

export const userState = atom({
  key: KEYS.USER,
  default: {
    nickname: '',
    id: '',
  },
  effects: [localStorageEffect(KEYS.USER)],
});
