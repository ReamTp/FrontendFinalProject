import styled from "styled-components";
import { Button } from "../../../common";

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
            height: 40px;
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

        ${Button} {
            > div {
                position: relative;

                svg {
                    width: 25px;
                    height: 25px;
                    fill: ${({theme}) => theme.text};
                    transition: fill 0.15s ease-in-out;

                    &:hover {
                        fill: ${({theme}) => theme.textHover};
                    }

                }

                > div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    font-size: 0.8rem;
                    border-radius: 50%;
                    background-color: ${({theme}) => theme.info};
                    color: white;
                    position: absolute;
                    right: -10px;
                    bottom: -5px;

                    &.active {
                        display: none;
                    }
                }
            }


        }

        a {
            color: ${({theme}) => theme.warning};
            transition: color 0.15s ease-in-out;

            &:hover {
                color: ${({theme}) => theme.warningHover};
            }
        }
    }
`;
