import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../common";

export const LateralMenuContainer = styled.div`
    background-color: ${({theme}) => theme.secondaryColor};
    height: 100%;
    transition: all 0.4s linear;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        border-top: 1px solid ${({theme}) => theme.tertiaryColor};
        border-bottom: 1px solid ${({theme}) => theme.tertiaryColor};
    }

    &.open {
        transform: translateX(0%);
    }
`;

export const LateralMenuHeader = styled.div`
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
        cursor: pointer;

        &:nth-of-type(1) {
            width: 30px;
            height: 30px;

            &:active {
                transform: scale(0.8);
            }
        }
    }

    > button {
        svg {
            width: 45px;
            height: 45px;
            stroke: ${({theme}) => theme.appName};
            fill: none !important;
            transition: all 0.2s linear;

            &:hover {
                transform: scale(1.025);
            }

            &:active {
                transform: scale(0.8);
            }
        }
    }
`;

export const LateralMenuCategories = styled.div`
    width: 100%;
    min-height: calc(100vh - ${(props: {height: number}) => props.height}px);
    border-top: 2px solid ${({theme}) => theme.tertiaryColor};
    border-bottom: 2px solid ${({theme}) => theme.tertiaryColor};
    padding: 15px 25px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;

        &-thumb {
            border-radius: 20px;
            background-color: ${({theme}) => theme.appName};
        }
    }

    ${Button} {
        color: ${({theme}) => theme.success};
        padding: 0;
        padding-top: 15px;

        &:hover {
            color: ${({theme}) => theme.successHover};
        }
    }
`;

export const LateralMenuSubTitle = styled.h3`
    color: ${({theme}) => theme.text};
    padding: 15px 0;
    font-size: 1rem;
    font-weight: normal;
`;

export const LateralMenuCategoryName = styled(Link)`
    display: block;
    color: ${({theme}) => theme.textHover};
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.2s linear;

    &:hover {
        padding-left: 5px;
        color: ${({theme}) => theme.text};
    }
`;

export const LateralMenuFooter = styled.div`
    width: 100%;
    padding: 15px 25px;
`;