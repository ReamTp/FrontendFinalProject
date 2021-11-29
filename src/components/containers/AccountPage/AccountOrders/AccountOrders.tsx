import useOrders from '../../../../hooks/useOrders'
import { Button } from '../../../common'
import { AccountsOrdersContainer, OrderContainer, OrderInfo } from './AccountsOrders.elements'

const AccountOrders = () => {
    const orders = useOrders();

    const formatDate = (date: Date) : string =>{
        let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        return formatted_date;
    }

    return (
        <AccountsOrdersContainer>
            <h2>Mis pedidos</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <OrderContainer>
                            <OrderInfo>
                                <h3>Order N°{order.id} <span>{formatDate(new Date(order.date))}</span></h3>
                                <p>Total: S/ {order.total}</p>
                            </OrderInfo>
                            {/* <Button>Ver más</Button> */}
                        </OrderContainer>
                    </li>
                ))}
            </ul>
        </AccountsOrdersContainer>
    )
}

export default AccountOrders
