import styled from "styled-components";

export const SwitchContainer = styled.button`
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    margin-left: 5px;

    &:hover {
        cursor: pointer;
    }

    svg {
        height: 40px;
        width: 40px;
        margin-top: 5px;
        fill: ${({theme}) => theme.text};
    }
`;