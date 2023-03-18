import { KEYS } from '@/constants/atomKey';
import localStorageEffect from '@/store/effects/localStorageEffect';
import { atom } from 'recoil';

export const questionListTypeState = atom({
  key: KEYS.QUESTION_LIST_TYPE,
  default: 'list',
  effects: [localStorageEffect(KEYS.QUESTION_LIST_TYPE)],
});
