import React, { useRef, useState } from 'react'
import useElementWidth from '../../../../hooks/useElementWidth'
import { LoginActionsContainer } from './LoginActions.elements'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const LoginActions = () => {
    const content = useRef() as React.MutableRefObject<HTMLDivElement>;
    const width = useElementWidth(content);
    const [move, setMove] = useState(false);

    return (
        <LoginActionsContainer ref={content}>
            <LoginForm move={move} setMove={setMove} width={width}/>
            <RegisterForm move={move} setMove={setMove} width={width}/>
        </LoginActionsContainer>
    )
}

export default LoginActions
