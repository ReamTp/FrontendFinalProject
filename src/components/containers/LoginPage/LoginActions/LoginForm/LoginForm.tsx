import React, { FormEvent, useState } from 'react'
import { AccessFormsProps } from '../../../../../types/components/containers'
import { Button, Input } from '../../../../common';
import { useHistory } from 'react-router-dom';
import { ActionForm, FormContainer } from '../LoginActions.elements'

const LoginForm = (props: AccessFormsProps) => {
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();

    redirect && history.goBack();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <FormContainer className={props.move ? 'move' : ''} width={props.width}>
            <div className="login">
                <h1>Iniciar Sesión</h1>
                <ActionForm onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
                    <div>
                        <label>Ingresa tu correo:</label>
                        <Input id="email" name="email" type="email" placeholder="Correo"/>
                    </div>
                    <div>
                        <label>Ingresa tu correo:</label>
                        <Input id="id" name="password" type="password" placeholder="Contraseña"/>
                    </div>
                    <div className="buttons">
                        <Button type="submit" onClick={() => setRedirect(true)} danger>Regresar</Button>
                        <Button type="submit" success>Iniciar Sesión</Button>
                    </div>
                </ActionForm>

                <div className="info">
                    <p>¿No tienes cuenta?</p>
                    <Button onClick={() => props.setMove && props.setMove(true)} transparent>Registrate aquí</Button>
                </div>
            </div>
        </FormContainer>
    )
}

export default LoginForm;
