import styled from "styled-components";
import { Container } from "../../common";

export const FooterContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.secondaryColor};
    box-shadow: -3px 0px 15px 0px ${({theme}) => theme.shadowColor};
    bottom: 0;

    ${Container} {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .socialMedia {
            width: 150px;
            display: flex;
            justify-content: space-between;
        }
    }
`;