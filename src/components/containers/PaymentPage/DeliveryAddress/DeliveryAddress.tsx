import React from 'react'
import { DeliveryAddressProps } from '../../../../types/components/containers'
import { Button, Input } from '../../../common'
import { PaymentContent, PaymentTitle } from '../PaymentPageContents'
import { DeliveryAddressForm } from './DeliveryAddress.elements'

const DeliveryAddress = ({ direction }: DeliveryAddressProps) => {
    return (
        <PaymentContent>
            <PaymentTitle>Dirección</PaymentTitle>
            <DeliveryAddressForm>
                <label>Tu Dirección:</label>
                <Input type="text" value={direction} />
                <Button>Guardar</Button>
            </DeliveryAddressForm>
        </PaymentContent>
    )
}

export default DeliveryAddress
