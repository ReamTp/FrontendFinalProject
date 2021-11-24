import React, { FormEvent, useContext, useState } from 'react'
import { AccessFormsProps } from '../../../../../types/components/containers'
import { Button, Input } from '../../../../common';
import { useHistory } from 'react-router-dom';
import { ActionForm, FormContainer } from '../LoginActions.elements'
import useLoginForm from '../../../../../hooks/useLoginForm';
import LoginUser from './LoginUser';
import { UserContext } from '../../../../../contexts';

const LoginForm = (props: AccessFormsProps) => {
    const [redirect, setRedirect] = useState(false)
    const [formData, onChange] = useLoginForm();
    const history = useHistory();
    const { login } = useContext(UserContext);

    redirect && history.goBack();

    return (
        <FormContainer className={props.move ? 'move' : ''} width={props.width}>
            <div className="login">
                <h1>Iniciar Sesión</h1>
                <ActionForm onSubmit={(e: FormEvent<HTMLFormElement>) => LoginUser(e, formData, setRedirect, login)}>
                    <div>
                        <label htmlFor="emailLogin">Ingresa tu correo:</label>
                        <Input id="emailLogin" name="emailLogin" type="email" placeholder="Correo" value={formData.email} onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="passwordLogin">Ingresa tu correo:</label>
                        <Input id="passwordLogin" name="passwordLogin" type="password" placeholder="Contraseña" value={formData.password} onChange={onChange}/>
                    </div>
                    <div className="buttons">
                        <Button type="button" onClick={() => setRedirect(true)} danger>Regresar</Button>
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
