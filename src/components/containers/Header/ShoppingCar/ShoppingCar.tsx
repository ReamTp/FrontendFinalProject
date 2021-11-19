import React, { useRef, useState } from 'react';
import useElementHeight from '../../../../hooks/useElementHeight';
import { ActionsHeaderProps } from '../../../../types/components/containers';
import { BackgroundActionsHeader } from '../Header.elements';
import SCNoProductsInfo from './SCNoProductsInfo';
import SCProductsInfo from './SCProductsInfo';
import { ShoppingCarContainer, ShoppingCarHeader, ShoppingCarTitle } from './ShoppingCar.elements'

const ShoppingCar = (props: ActionsHeaderProps) => {
    const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const size = useElementHeight(contentRef);
    const [products, setProducts] = useState([{}, {}, {}, {}, {}, {}, {}]);

    return (
        <>
            <BackgroundActionsHeader className={props.open ? "open": ""} onClick={() => props.isOpen()}/>
            <ShoppingCarContainer ref={contentRef} className={props.open ? "open" : ""}>
                <ShoppingCarHeader>
                    <ShoppingCarTitle>Tu Carrito</ShoppingCarTitle>
                </ShoppingCarHeader>
                {products.length > 0 ? <SCProductsInfo heigth={size} products={products}/> : <SCNoProductsInfo heigth={size} openShoppingCar={props.isOpen}/>}
            </ShoppingCarContainer>
        </>
    )
}

export default ShoppingCar
