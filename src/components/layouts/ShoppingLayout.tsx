import React from 'react'
import { ShoppingLayoutProps } from '../../types/components/layouts'
import HeaderOnlyName from '../containers/HeaderOnlyName'

const ShoppingLayout = (props: ShoppingLayoutProps) => {
    return (
        <>
            <HeaderOnlyName/>
            {props.children}
        </>
    )
}

export default ShoppingLayout
