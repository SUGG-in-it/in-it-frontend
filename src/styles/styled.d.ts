import 'styled-components';

// styled-components안에 들어있는 DefaultTheme 형식 지정해주기
declare module 'styled-components' {
  export interface DefaultTheme {
    backgrondLightColor: string;
    backgrondDarkColor: string;
    pointColor: string;
    primaryColor: string;
    primary2Color: string;
    grayColor: string;
    greyLineColor: string;
    textColor: string;
    darkModeButtonColor: string;
    loginFormColor: string;
  }
}
