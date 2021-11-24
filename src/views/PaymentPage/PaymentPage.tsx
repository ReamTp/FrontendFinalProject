import { Container } from '../../components/common';
import { DeliveryAddress, PaymentResume, ProductsToPay } from '../../components/containers/PaymentPage';
import PaymentPageContainer from './PaymentPageContainer';

const PaymentPage = () => {
    const products = [{}, {}, {}, {}];

    return (
        <PaymentPageContainer>
            <Container>
                <h1>Tu Pedido</h1>
            </Container>
            <Container>
                <div>
                    <DeliveryAddress direction={"Av."}/>
                    <ProductsToPay products={products}/>
                </div>

                <PaymentResume totalProducts={0.00}/>
            </Container>
        </PaymentPageContainer>
    )
}

export default PaymentPage
