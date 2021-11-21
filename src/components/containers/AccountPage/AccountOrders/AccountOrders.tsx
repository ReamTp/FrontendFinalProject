import { useState } from 'react'
import { Button } from '../../../common'
import { AccountsOrdersContainer, OrderContainer, OrderInfo } from './AccountsOrders.elements'

const AccountOrders = () => {
    const [orders, setOrders] = useState([{id: 1}, {id: 2}, {id: 3}])

    return (
        <AccountsOrdersContainer>
            <h2>Mis pedidos</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <OrderContainer>
                            <OrderInfo>
                                <h3>Order N°4</h3>
                                <p>Total: $0.00</p>
                            </OrderInfo>
                            <Button>Ver más</Button>
                        </OrderContainer>
                    </li>
                ))}
            </ul>
        </AccountsOrdersContainer>
    )
}

export default AccountOrders
