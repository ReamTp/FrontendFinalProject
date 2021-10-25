import styled from "styled-components";
import { Container } from "../../../common";

export const AboutContainer = styled.div`
    background-color: ${({theme}) => theme.secondaryColor};
    height: 425px;
    text-align: center;

    ${Container} {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const AboutTitleContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        max-width: 50%;
        color: ${({theme}) => theme.title};
        font-size: 32px;
        margin-top: 10px;
    }
`;

export const AboutInfosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`;

export const AboutInfoContainer = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
        margin: 15px 0 10px 0;
        font-size: 24px;
    }

    p {
        font-size: 14px;
    }
`;