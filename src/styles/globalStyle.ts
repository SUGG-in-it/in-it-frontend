import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Do Hyeon', sans-serif;
        background-color: ${({ theme }) => theme.backgrondDarkColor};
    }
    button{
        font-family: 'Do Hyeon', sans-serif;
    }
    input{
        font-family: 'Do Hyeon', sans-serif;
    }
    textarea{
        font-family: 'Do Hyeon', sans-serif;
    }
    p{
        line-height: 1.3;
    }
    .toastui-editor-defaultUI{
        width: 100%;
        background-color: white;
    }
`;
