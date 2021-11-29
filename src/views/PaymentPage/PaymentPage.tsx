import { useCallback, useContext, useEffect, useState } from 'react';
import { Container } from '../../components/common';
import { PaymentObjectProps } from '../../types/components/containers';
import { DeliveryAddress, PaymentButton, PaymentResume, ProductsToPay } from '../../components/containers/PaymentPage';
import { ShoppingCarContext, UserContext } from '../../contexts';
import { ProductBallot } from '../../interfaces';
import { userServices } from '../../services';
import PaymentPageContainer from './PaymentPageContainer';

const PaymentPage = () => {
    const [total, setTotal] = useState<number>(0);
    const { userState } = useContext(UserContext);
    const { shoppingCarState } = useContext(ShoppingCarContext);
    const [direction, setDirection] = useState<string>('');

    const getUser = useCallback(() => {
        userServices.getUserWithToken(userState.token)
            .then(res => {
                setDirection(res.direction !== undefined ? res.direction : '');
            });
    }, [userState.token]);

    useEffect(() => getUser(), [getUser]);

    const getBallotData = (): PaymentObjectProps => {
        const fecha = new Date();
        const arr = [] as ProductBallot[];

        for(let i = 0; i < shoppingCarState.products.length; i++) {
            arr.push({
                id: shoppingCarState.products[i].id,
                quantity: shoppingCarState.products[i].cantidad
            } as ProductBallot);
        }

        return {
            date: fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate(),
            total: shoppingCarState.totalPrice,
            products: arr
        }
    }

    return (
        <PaymentPageContainer>
            <Container>
                <h1>Tu Pedido</h1>
            </Container>
            <Container>
                <div>
                    <DeliveryAddress direction={direction}/>
                    <ProductsToPay products={shoppingCarState.products}/>
                </div>

                <div>
                    <PaymentResume totalProducts={shoppingCarState.totalPrice} total={total} setTotal={setTotal}/>
                    <PaymentButton data={getBallotData} />
                </div>
            </Container>
        </PaymentPageContainer>
    )
}

export default PaymentPage
