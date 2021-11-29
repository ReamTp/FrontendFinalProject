import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { ShoppingCarContext, UserContext } from '../../../../contexts'
import ballotServices from '../../../../services/Ballot'
import { PaymentObjectProps } from '../../../../types/components/containers'
import { createToast } from '../../../../utils'
import { Button } from '../../../common'
import { PaymentContent } from '../PaymentPageContents'

type Props = {
    data: () => PaymentObjectProps
}

const PaymentButton = (props: Props) => {
    const { userState } = useContext(UserContext)
    const { removeAllShoppingCar } = useContext(ShoppingCarContext)
    const [redirect, setRedirect] = useState<boolean>(false)

    const registerBallot = () => {
        const object = props.data();
        ballotServices.register(object, userState.token)
        .then(res => {
            res.status ? createToast('success', res.message) : createToast('error', res.message)
            removeAllShoppingCar();
            setRedirect(true);
        });
    }

    return (
        <PaymentButtonContainer>
            <Button onClick={() => registerBallot()}>Realizar Pedido</Button>
            { redirect && <Redirect to="/"/> }
        </PaymentButtonContainer>
    )
}

const PaymentButtonContainer = styled(PaymentContent)`
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Button} {
        width: 80%;
        height: 40px;
        font-size: 1.125rem;
        font-weight: bold;
    }
`;

export default PaymentButton
