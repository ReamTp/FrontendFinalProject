import React from 'react'
import { MaxContainer } from '../../components/common'
import { LoginActions, LoginBanner } from '../../components/containers/LoginPage'

const LoginPage = () => {
    return (
        <MaxContainer>
            <LoginBanner/>
            <LoginActions/>
        </MaxContainer>
    )
}

export default LoginPage
