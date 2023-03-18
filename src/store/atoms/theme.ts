import { KEYS } from '@/constants/atomKey';
import localStorageEffect from '@/store/effects/localStorageEffect';
import { atom } from 'recoil';

export const darkModeState = atom({
  key: KEYS.IS_DARK_MODE,
  default: false,
  effects: [localStorageEffect(KEYS.IS_DARK_MODE)],
});
