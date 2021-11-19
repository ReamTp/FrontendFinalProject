import styled from "styled-components";
import { ActionForm } from "../LoginActions.elements";

export const RegisterFormContent = styled.div`
    width: 60%;
`;

export const RegisterForm = styled(ActionForm)``;

export const DoubleInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > div {
        width: 45%;
    }
`;