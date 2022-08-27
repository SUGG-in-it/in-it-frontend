import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'isDarkMode',
  default: false,
});
