import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    body {
        font-size: 16px;
        margin: 0;
        min-height: 100vh;
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.text};
    }

    a {
        text-decoration: none;
    }
`;