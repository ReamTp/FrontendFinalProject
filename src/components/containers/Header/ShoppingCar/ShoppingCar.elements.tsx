import styled from "styled-components";
import { ShoppingCarProdutcsProps } from "../../../../types/components/containers";
import { Button, ButtonLink } from "../../../common";

// Main Content
export const ShoppingCarContainer = styled.div`
    background-color: ${({theme}) => theme.primaryColor};
    height: 100%;
    transition: all 0.4s linear;
    transform: translateX(100%);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;

        &-thumb {
            border-radius: 20px;
            background-color: ${({theme}) => theme.appName};
        }
    }

    & > div {
        border-top: 1px solid ${({theme}) => theme.tertiaryColor};
        border-bottom: 1px solid ${({theme}) => theme.tertiaryColor};
    }

    &.open {
        transform: translateX(0%);
    }
`;

// Header Shopping Car
export const ShoppingCarTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

// Info Shopping Car
const ShoppingCarInfoContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.secondaryColor};
    display: flex;
    align-items: center;
`;

export const ShoppingCarHeader = styled(ShoppingCarInfoContainer)`
    padding-left: 25px;
`;

export const SCNoProductsContent = styled(ShoppingCarInfoContainer)`
    min-height: calc(${(props: ShoppingCarProdutcsProps) => props.heigth}px - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        margin-top: 35px;
        margin-bottom: 25px;
    }

    > p {
        margin-bottom: 35px;
    }
`;

export const ShoppingCarProducts = styled(ShoppingCarInfoContainer)`
    min-height: calc(${(props: ShoppingCarProdutcsProps) => props.heigth}px - 150px);
    margin: 10px 0;
    padding: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const SCProductsHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px 25px;
    border-bottom: 1px solid ${({theme}) => theme.tertiaryColor};
`;

export const SCProductsContent = styled.div`
    width: 100%;
    padding: 0px 25px;
    background-color: ${({theme}) => theme.secondaryColor};
`;

export const SCProductContent = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme}) => theme.tertiaryColor};

    img {
        width: 60px;
        height: 60px;
    }

    div {
        display: flex;

        &:nth-of-type(1) {
            height: 50%;
            flex-direction: column;
            justify-content: space-between;
        }

        &:nth-of-type(2n) {
            align-items: center;

            ${Button} {
                display: flex;
                align-items: center;
                width: 30px;
                height: 30px;
                padding: 0px;
                margin: 0px 5px;

                &:nth-of-type(1) {
                    svg {
                        width: 25px;
                        height: 25px;
                    }
                }

                &:nth-of-type(2n) {
                    svg {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            input {
                width: 35px;
                height: 35px;
                background-color: transparent;
                border: none;
                text-align: center;
                padding: 0px;
                color: ${({theme}) => theme.text};
                font-size: 1rem;
            }
        }
    }
`;

// Footer Shopping Car
export const ShoppingCarFooter = styled(ShoppingCarInfoContainer)`
    height: 100px;
    padding: 15px 25px;
    justify-content: space-between;

    ${Button} {
        display: flex;
        align-items: center;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    ${ButtonLink} {
        box-sizing: content-box;
        padding: 0.5rem 1.2rem;

        span {
            font-size: 0.875rem;

            &:nth-of-type(1) {
                font-weight: bold;
                margin-right: 25px;
            }

            &:nth-of-type(2n) {
                margin-right: 10px;
            }

            &:nth-of-type(2n+1) {
            }
        }
    }
`;