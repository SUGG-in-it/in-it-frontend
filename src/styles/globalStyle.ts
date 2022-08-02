import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        margin:0;
        font-family: 'Do Hyeon', sans-serif;
    }
    body{
        margin:0;
    }
    button{
        font-family: 'Do Hyeon', sans-serif;
    }
    input{
        font-family: 'Do Hyeon', sans-serif;
    }
`;
