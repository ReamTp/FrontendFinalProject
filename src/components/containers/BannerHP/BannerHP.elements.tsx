import styled from "styled-components";
import Button from "../../common/Button";
import Container from "../../common/Containers";

export const ContainerBannerHP = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primaryColor};
    height: 678px;
    display: flex;
    align-items: center;

    ${Container} {
        display: flex;
        justify-content: space-between;
    }
`;

export const InfoContent = styled.div`
    width: 550px;
`;

export const TitleContent = styled.div`
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 72px;

            &:nth-of-type(2n) {
                align-self: flex-end;
                font-family: 'Merienda', cursive;
                color: ${({theme}) => theme.appName};
                margin-bottom: 30px;
            }
        }

        p {
            font-size: 24px;
        }
    }
`;

export const SearchInputContent = styled.div`
    width: 427px;
    height: 52px;
    margin-top: 35px;
    display: flex;

    input {
        width: 355px;
        height: 100%;
        font-size: 20px;
    }

    ${Button} {
        min-width: 52px;
        height: 100%;
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

export const ImageContent = styled.div`
    width: 239px;
`;