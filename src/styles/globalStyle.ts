import { media } from '@/styles/mediaQuery';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'GyeonggiTitleM', sans-serif;
        background-color: ${({ theme }) => theme.backgrondDarkColor};
    }
    button{
        font-family: 'GyeonggiTitleM', sans-serif;
    }
    input{
        font-family: 'GyeonggiTitleM', sans-serif;
    }
    textarea{
        font-family: 'GyeonggiTitleM', sans-serif;
    }
    p{
        line-height: 1.3;
    }
    .toastui-editor-defaultUI{
        width: 100%;
    }
    @font-face {
        font-family: 'GyeonggiTitleM';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiTitleM.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
