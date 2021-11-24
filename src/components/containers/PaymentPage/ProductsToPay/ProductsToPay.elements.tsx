import styled from "styled-components";

export const ProductsContent = styled.div`
    width: 100%;
`;

export const ProductToPayContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 15px 0;

    &:nth-of-type(1) {
        margin-top: 0;
    }
`;

export const ProductToPayInfo = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    align-items: center;

    p {
        font-weight: lighter;
        margin-right: 10px;
    }

    img {
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
`;

export const ProductToPayPrice = styled.p`
    font-weight: bold;
`;