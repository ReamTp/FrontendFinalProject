import styled from "styled-components";

export const AccountConfigContainer = styled.div`
    width: 100%;
    height: 100%;

    h2 {
        font-size: 1.75rem;
        text-align: center;
    }

    form {
        width: 90%;
        margin: 15px auto 0 auto;
        display: flex;
        flex-direction: column;

        > button {
            margin-top: 10px;
            font-weight: bold;
            align-self: flex-end;
        }
    }
`;

export const CheckBoxContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        font-size: 1.25rem;
    }

    select {
        margin-top: 5px;
        display: block;
        width: 100%;
        height: 38px;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.tertiaryColor};
        background-clip: padding-box;
        border: 1px solid ${({theme}) => theme.border};
        border-radius: .25rem;
        outline: 0 none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        &:nth-of-type(1){
            margin-right: 5px;
        }
    }
`;

export const DoubleInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

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
            margin-top: 5px;
        }
    }

    ${CheckBoxContent} {
        width: 46%;
    }
`;