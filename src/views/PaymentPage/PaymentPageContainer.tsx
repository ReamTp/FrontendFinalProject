import styled from 'styled-components'
import { Container, ViewContainer } from '../../components/common';

const PaymentPageContainer = styled(ViewContainer)`
    padding: 25px 0;

    ${Container} {
        &:nth-of-type(1) {
            margin-bottom: 15px;
        }

        &:nth-of-type(2n) {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            > div {
                width: 50%;
                &:nth-of-type(1) {
                }
            }
        }
    }
`;

export default PaymentPageContainer
