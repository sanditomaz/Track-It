import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        cursor: default;
        a {
            text-decoration: none;
        }
    }

    html,body{
        height: 100%;
        background-color:#f2f2f2;
    }

    .root{
        height: 100%
    }
`;

export default GlobalStyle;
