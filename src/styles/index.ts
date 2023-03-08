import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        min-height: 100vh;
        font-family: 'Poppins', cursive;
        background-color: rgba(0,0,0,0.05);
    }
`;

export default GlobalStyle;
