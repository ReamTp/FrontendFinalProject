import styled from "styled-components";

export const PaymentContent = styled.div`
    width: 95%;
    min-height: 240px;
    border-radius: 15px;
    padding: 15px 25px;
    background-color: ${({theme}) => theme.secondaryColor};
    margin-bottom: 15px;
`;

export const PaymentTitle = styled.h2`
    width: 100%;
    color: ${({theme}) => theme.text};
    font-size: 1.875rem;
    border-bottom: 2px solid ${({theme}) => theme.border};
    padding-bottom: 8px;
    margin-bottom: 10px;
`;