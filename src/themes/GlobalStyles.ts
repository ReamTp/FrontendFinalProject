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
        /* min-height: 100vh; */
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.text};

        &::-webkit-scrollbar {
        width: 8px;

            &-thumb {
                border-radius: 20px;
                background-color: ${({theme}) => theme.title};
            }
        }
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    button, input {
        overflow: visible;
    }

    img {
        width: 100%;
    }
`;