import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router';
import { AccessFormsProps } from '../../../../../types/components/containers';
import { Button, Input } from '../../../../common';
import { FormContainer } from '../LoginActions.elements';
import { DoubleInput, RegisterForm, RegisterFormContent } from './RegisterForm.elements';

const RegisterFrom = (props: AccessFormsProps) => {
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();

    redirect && history.goBack();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <FormContainer className={`${props.move ? 'move' : ''} register`} width={props.width}>
            <RegisterFormContent>
                <h1>Registrate</h1>

                <RegisterForm onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
                    <DoubleInput>
                        <div>
                            <label>Ingresa tus Nombres:</label>
                            <Input id="email" name="email" type="email" placeholder="Nombres"/>
                        </div>
                        <div>
                            <label>Ingresa tus Apellidos:</label>
                            <Input id="email" name="email" type="email" placeholder="Apellidos"/>
                        </div>
                    </DoubleInput>
                    <div>
                        <label>Ingresa tu correo:</label>
                        <Input id="email" name="email" type="email" placeholder="Correo"/>
                    </div>
                    <DoubleInput>
                        <div>
                            <label>Ingresa tu contraseña:</label>
                            <Input id="id" name="password" type="password" placeholder="Contraseña"/>
                        </div>
                        <div>
                            <label>Confirma tu contraseña:</label>
                            <Input id="id" name="password" type="password" placeholder="Contraseña"/>
                        </div>
                    </DoubleInput>

                    <div className="buttons">
                        <Button type="submit" onClick={() => setRedirect(true)} danger>Regresar</Button>
                        <Button type="submit" success>Registrame</Button>
                    </div>
                </RegisterForm>

                <div className="info">
                    <p>¿Ya tienes cuenta?</p>
                    <Button onClick={() => props.setMove && props.setMove(false)} transparent>Inicia Sesión</Button>
                </div>
            </RegisterFormContent>
        </FormContainer>
    )
}

export default RegisterFrom
