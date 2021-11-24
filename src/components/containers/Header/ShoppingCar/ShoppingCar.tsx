import React, { useContext, useRef } from 'react';
import { ShoppingCarContext } from '../../../../contexts';
import useElementHeight from '../../../../hooks/useElementHeight';
import { ActionsHeaderProps } from '../../../../types/components/containers';
import { BackgroundActionsHeader } from '../Header.elements';
import SCNoProductsInfo from './SCNoProductsInfo';
import SCProductsInfo from './SCProductsInfo';
import { ShoppingCarContainer, ShoppingCarHeader, ShoppingCarTitle } from './ShoppingCar.elements'

const ShoppingCar = (props: ActionsHeaderProps) => {
    const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const size = useElementHeight(contentRef);
    const { shoppingCarState } = useContext(ShoppingCarContext);

    const { totalPrice, products } = shoppingCarState;

    return (
        <>
            <BackgroundActionsHeader className={props.open ? "open": ""} onClick={() => props.isOpen()}/>
            <ShoppingCarContainer ref={contentRef} className={props.open ? "open" : ""}>
                <ShoppingCarHeader>
                    <ShoppingCarTitle>Tu Carrito</ShoppingCarTitle>
                </ShoppingCarHeader>
                {shoppingCarState.productCount > 0 && shoppingCarState.totalPrice > 0 ? <SCProductsInfo heigth={size} products={products} total={totalPrice}/> : <SCNoProductsInfo heigth={size} openShoppingCar={props.isOpen}/>}
            </ShoppingCarContainer>
        </>
    )
}

export default ShoppingCar
