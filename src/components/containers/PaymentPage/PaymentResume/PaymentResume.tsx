import React from 'react'
import { PaymentResumeProps } from '../../../../types/components/containers';
import { PaymentContent, PaymentTitle } from '../PaymentPageContents'
import { PaymentResumeItem } from './PaymentResume.elements'

const PaymentResume = ({totalProducts}: PaymentResumeProps) => {
    const tarifa = 2.66, envio = 5.68, total = totalProducts + tarifa + envio;

    return (
        <PaymentContent>
            <PaymentTitle>Resumen</PaymentTitle>
            <PaymentResumeItem>
                <h5>Costo de Productos</h5>
                <p>S/ {totalProducts}</p>
            </PaymentResumeItem>
            <PaymentResumeItem>
                <h5>Tarifa del servicio</h5>
                <p>S/ {tarifa}</p>
            </PaymentResumeItem>
            <PaymentResumeItem>
                <h5>Costo de Envio</h5>
                <p>S/ {envio}</p>
            </PaymentResumeItem>
            <PaymentResumeItem className="total">
                <h5>Total</h5>
                <p>S/ {total}</p>
            </PaymentResumeItem>
        </PaymentContent>
    )
}

export default PaymentResume
