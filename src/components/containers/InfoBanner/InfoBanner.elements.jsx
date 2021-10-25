import styled from "styled-components";
import Container from "../../common/Containers";

export const ContainerInfo = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primaryColor};
    height: 412px;
    display: flex;
    align-items: center;

    ${Container} {
        display: flex;
        justify-content: space-between;
    }
`;

export const InfoSection = styled.div`
    width: 630px;
`;

export const SubTitle = styled.div`
    .subtitle {
        width: 100%;
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 72px;
            align-self: flex-end;
            font-family: 'Ubuntu';
            margin-top: 7.3rem;
            font-weight: 400;
            color: ${({theme}) => theme.title};          
        }

        p {
            font-size: 24px;
            margin-top: 15px;
        }
    }
`;

export const Image = styled.div`
    width: 450px;
`;
