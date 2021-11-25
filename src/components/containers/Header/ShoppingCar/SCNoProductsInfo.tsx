import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { ShoppingCarNoProdutcsProps } from '../../../../types/components/containers'
import { ButtonLink, ImageCircle } from '../../../common'
import { SCNoProductsContent } from './ShoppingCar.elements'

const SCNoProductsInfo = (props: ShoppingCarNoProdutcsProps) => {
    return (
        <SCNoProductsContent heigth={props.heigth}>
            <ImageCircle image={MdAddShoppingCart} noHover size={70}/>
            <p>Aún no agregas nada a tu carrito</p>
            <ButtonLink to="/products" success onClick={() => props.openShoppingCar()}>Comienza a Comprar</ButtonLink>
        </SCNoProductsContent>
    )
}

export default SCNoProductsInfo
