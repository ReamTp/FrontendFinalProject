import React from 'react'
import { AppName, Container } from '../common'
import { HeaderContainer } from './Header/Header.elements'

const HeaderOnlyName = () => {
    return (
        <HeaderContainer>
            <Container>
                <AppName/>
            </Container>
        </HeaderContainer>
    )
}

export default HeaderOnlyName
