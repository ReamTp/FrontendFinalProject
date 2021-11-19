import styled from "styled-components";
import { AccessFormsProps } from "../../../../types/components/containers";
import { Button } from "../../../common";

export const LoginActionsContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({theme}) => theme.secondaryColor};
    display: flex;
    overflow: hidden;
`;

export const FormContainer = styled.div`
    width: 100%;
    min-width: ${(props: AccessFormsProps) => (props.width)}px;
    max-width: ${(props: AccessFormsProps) => (props.width)}px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-align: center;

    .login {
        width: 50%;
    }

    &.register {
        opacity: 0;
    }

    &.move {
        transform: translateX(-100%);

        &.register {
            opacity: 1;
        }
    }

    .info {
        display: flex;
        align-items: center;

        ${Button} {
            color: ${({theme}) => theme.success};

            &:hover {
                color: ${({theme}) => theme.successHover};
            }
        }
    }
`;

export const ActionForm = styled.form`
    width: 100%;
    margin: 25px auto;

    div {
        input {
            margin: 10px 0 20px 0;
        }

        label {
            display: block;
            width: 100%;
            text-align: left;
        }
    }

    & .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${Button} {
            width: 40%;
            margin: 15px 0;
        }
    }
`;