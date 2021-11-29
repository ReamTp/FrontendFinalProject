import React from 'react'
import { PaymentResumeProps } from '../../../../types/components/containers';
import { PaymentContent, PaymentTitle } from '../PaymentPageContents'
import { PaymentResumeItem } from './PaymentResume.elements'

const PaymentResume = ({totalProducts, total, setTotal}: PaymentResumeProps) => {
    const tarifa = 2.66, envio = 5.68;
    setTotal(totalProducts + tarifa + envio);

    return (
        <PaymentContent>
            <PaymentTitle>Resumen</PaymentTitle>
            <PaymentResumeItem>
                <h5>Costo de Productos</h5>
                <p>S/ {totalProducts.toFixed(2)}</p>
            </PaymentResumeItem>
            <PaymentResumeItem>
                <h5>Tarifa del servicio</h5>
                <p>S/ {tarifa.toFixed(2)}</p>
            </PaymentResumeItem>
            <PaymentResumeItem>
                <h5>Costo de Envio</h5>
                <p>S/ {envio.toFixed(2)}</p>
            </PaymentResumeItem>
            <PaymentResumeItem className="total">
                <h5>Total</h5>
                <p>S/ {total.toFixed(2)}</p>
            </PaymentResumeItem>
        </PaymentContent>
    )
}

export default PaymentResume
