import styled from "styled-components";

export const AccountCloseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.75rem;
        margin-bottom: 10px;
        align-self: flex-start;
    }

    button {
        margin-top: 25px;
        width: 30%;
    }
`;

export const AccountCloseImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    img {
        width: 100%;
    }

    p {
        width: 80%;
        a {
            color: ${props => props.theme.title};
        }
    }
`;

export const AccountCloseInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
        font-size: 1.25rem;
        width: 40%;
        padding-left: 25px;
    }

    ${AccountCloseImage} {
        width: 50%;
    }
`;