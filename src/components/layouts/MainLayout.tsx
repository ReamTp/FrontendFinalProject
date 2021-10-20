import React from 'react'
import { MainLayoutProps } from '../../types/components/layouts'
import Footer from '../containers/Footer/Footer'
import Header from '../containers/Header'

const MainLayout = (props: MainLayoutProps) => {
    return (
        <>
            <Header theme={props.hookTheme.theme} setTheme={props.hookTheme.setTheme}/>
            { props.children }
            <Footer/>
        </>
    )
}

export default MainLayout
