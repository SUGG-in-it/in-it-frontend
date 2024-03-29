/* Desktop (해상도 1024px)*/
const desktopQeury = () => `@media all and (min-width:1024px)`;

/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
const tabletQeury = () => `@media all and (max-width:1023px)`;

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
const mobileQeury = () => `@media all and (max-width:767px)`;

export const media = {
  desktop: desktopQeury,
  tablet: tabletQeury,
  mobile: mobileQeury,
};
