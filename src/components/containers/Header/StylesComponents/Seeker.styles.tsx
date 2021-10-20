import styled from "styled-components";
import { Button } from "../../../common/Button";

export const SearchBtn = styled(Button)`
    color: transparent;
    border: none;
`;

export const SeekerStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .searchContent {
        display: flex;

        input {
            color: ${({theme}) => theme.text};
            background-color: ${({theme}) => theme.tertiaryColor};
            box-sizing: border-box;
            height: 40px;
            border: 1px solid ${({theme}) => theme.border};
            border-radius: 0.25rem;
            outline: 0 none;
            padding-left: 10px;
            font-family: 'Ubuntu', sans-serif;
            transition: border 0.25s ease-in-out;

            &:focus {
                border: 1px solid ${({theme}) => theme.borderHover};
            }
        }

        ${SearchBtn} {
            width: 35px;
            height: 35px;
            margin-left: -45px;
            background-color: transparent;

            svg {
                width: 30px;
                height: 30px;
                fill: ${({theme}) => theme.text};
                transition: fill 0.5 ease-in-out;

                &:hover {
                    fill: ${({theme}) => theme.textHover};
                }
            }
        }
    }

    .navItems {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        height: 100%;

        a:nth-of-type(1) {
            svg {
                width: 25px;
                height: 25px;
                fill: ${({theme}) => theme.text};

                transition: fill 0.15s ease-in-out;

                &:hover {
                    fill: ${({theme}) => theme.textHover};
                }
            }
        }

        a:nth-of-type(2n) {
            color: ${({theme}) => theme.warning};
            transition: color 0.15s ease-in-out;

            &:hover {
                color: ${({theme}) => theme.warningHover};
            }
        }
    }
`;
