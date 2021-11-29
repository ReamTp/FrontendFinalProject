import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../contexts'
import { userServices } from '../../../../services'
import { DeliveryAddressProps } from '../../../../types/components/containers'
import { createToast } from '../../../../utils'
import { Button, Input } from '../../../common'
import { PaymentContent, PaymentTitle } from '../PaymentPageContents'
import { DeliveryAddressForm } from './DeliveryAddress.elements'

const DeliveryAddress = ({ direction }: DeliveryAddressProps) => {
    const [iDirection, setIDirection] = useState<string>('');
    const [complete, setComplete] = useState<boolean>(true);
    const { userState } = useContext(UserContext);

    useEffect(() => {
        direction !== null && direction !== '' && setIDirection(direction)
    }, [direction]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (complete) {
            setComplete(false);
            userServices.changeDirection(userState.token, iDirection).then(res => {
                res.status ? createToast('success', res.message): createToast('error', res.message);
                res.status && setComplete(true)
            });
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIDirection(e.target.value);
    }

    return (
        <PaymentContent>
            <PaymentTitle>Dirección</PaymentTitle>
            <DeliveryAddressForm onSubmit={onSubmit}>
                <label>Tu Dirección:</label>
                <Input type="text" value={iDirection} onChange={onChange} />
                <Button>Guardar</Button>
            </DeliveryAddressForm>
        </PaymentContent>
    )
}

export default DeliveryAddress
