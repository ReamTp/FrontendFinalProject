import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 100000000;
    background-color: ${({ theme }) => theme.blackTransparent};
    transition: all 0.5s ease-in-out;

    &.hidden {
        display: none;
    }
`;

export const ModalImage = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
    }
`;
export const ModalInfo = styled.form`
    width: 100%;
    h2 {
        font-size: 1.75rem;
        margin-bottom: 25px;
    }

    p {
        &:nth-of-type(1) {
            font-size: 1.2rem;
            margin-bottom: 25px;
        }

        &:nth-of-type(2n) {
            font-weight: bold;
            font-size: 1.2rem;
            text-align: end;
        }
    }

    > div {
        > input {
            color: ${({ theme }) => theme.text};
        }
    }
`;

export const ModalContainer = styled.div`
    width: 860px;
    height: 480px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    padding: 40px 45px;
    display: flex;
    justify-content: space-between;
    z-index: 100000001;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: ${({ theme }) => theme.primaryColor};

    #closeModal {
        position: absolute;
        top: 30px;
        right: 35px;
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.text};
        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.textHover};
        }

        &:active {
            transform: scale(0.9);
        }
    }

    > div {
        width: 45%;
    }

    > form {
        width: 50%;

        > div {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 25px 0;

            > label {
                margin-right: 18px;
            }

            input {
                width: 40%;
                height: 35px;
                font-size: 1rem;
                text-align: center;
                background-color: ${({ theme }) => theme.secondaryColor};
                border: 1px solid ${({ theme }) => theme.text};
                border-left: none;
                border-right: none;
                border-radius: 0;
                outline: none;

                &:focus , &:active {
                    outline: none;
                }

                &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }

            > div {
                width: 35px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid ${({ theme }) => theme.text};
                background-color: ${({ theme }) => theme.secondaryColor};

                svg {
                    fill: ${({ theme }) => theme.text};
                }

                &:hover {
                    cursor: pointer;

                    svg {
                        fill: ${({ theme }) => theme.textHover};
                    }
                }

                &:active {
                    transform: scale(0.95);
                }

                &:nth-of-type(1) {
                    border-radius: 5px 0 0 5px;
                    border-right: none;
                }

                &:nth-of-type(2n) {
                    border-radius: 0px 5px 5px 0px;
                    border-left: none;
                }
            }
        }

        > button {
            width: 90%;
            height: 50px;
            font-size: 1.2rem;
            margin: 25px auto;
        }
    }

    &.hidden {
        display: none;
    }
`;
