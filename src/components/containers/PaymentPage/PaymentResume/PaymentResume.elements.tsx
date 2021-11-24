import styled from "styled-components";

export const PaymentResumeItem = styled.div`
    display: flex;
    width: 100%;
    margin: 15px 0;
    justify-content: space-between;

    h5 {
        font-size: 1.2rem;
    }

    p {
        font-weight: lighter;
    }

    &.total {
        h5, p {
            font-weight: bold;
        }
    }
`;