import React from 'react'
import { ShoppingLayoutProps } from '../../types/components/layouts'

const ShoppingLayout = (props: ShoppingLayoutProps) => {
    return (
        <>
            <h1>Hola</h1>
            {props.children}
        </>
    )
}

export default ShoppingLayout
