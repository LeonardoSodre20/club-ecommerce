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
        z-index: 10;
        font-family: 'Poppins', cursive;
        
    }
`;

export default GlobalStyle;
