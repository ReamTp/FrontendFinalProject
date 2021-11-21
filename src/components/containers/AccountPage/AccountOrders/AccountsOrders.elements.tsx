import styled from "styled-components";

export const AccountsOrdersContainer = styled.div`
    h2 {
        font-size: 1.75rem;
        margin-bottom: 15px;
    }
`;

export const OrderContainer = styled.div`
    height: 80px;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.primaryColor};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    margin: 20px 0;

    &:hover {
        transform: scale(1.01);
    }

    &:nth-of-type(1) {
        margin-top: 0;
    }

    &:nth-last-of-type() {
        margin-bottom: 0;
    }
`;

export const OrderInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
        font-size: 1.5rem;
        color: ${({theme}) => theme.title};
    }

    p {
        font-size: 1.125rem;
    }
`;