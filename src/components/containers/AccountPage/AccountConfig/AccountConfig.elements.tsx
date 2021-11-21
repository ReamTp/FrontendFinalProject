import styled from "styled-components";

export const AccountConfigContainer = styled.div`
    width: 100%;
    height: 100%;

    h2 {
        font-size: 1.75rem;
    }

    form {
        width: 95%;
        margin-top: 25px;
        display: flex;
        flex-direction: column;

        > button {
            width: 30%;
            height: 50px;
            margin-top: 10px;
            font-size: 1.25rem;
            font-weight: bold;
            align-self: flex-end;
        }
    }
`;

export const DoubleInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    > div {
        width: 46%;

        &:nth-of-type(1){
            margin-right: 5px;
        }

        label {
            font-size: 1.25rem;
        }

        input {
            width: 100%;
            height: 40px;
            margin-top: 8px;
        }
    }
`;