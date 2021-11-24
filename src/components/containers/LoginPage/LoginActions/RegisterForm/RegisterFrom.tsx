import { FormEvent, useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../../../../../contexts';
import useRegisterForm from '../../../../../hooks/useRegisterForm';
import { AccessFormsProps } from '../../../../../types/components/containers';
import { Button, Input } from '../../../../common';
import { FormContainer } from '../LoginActions.elements';
import { DoubleInput, RegisterForm, RegisterFormContent } from './RegisterForm.elements';
import RegisterNewUser from './RegisterNewUser';

const RegisterFrom = (props: AccessFormsProps) => {
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();
    const [formData, onChange] = useRegisterForm();
    const { login } = useContext(UserContext);

    redirect && history.goBack();

    return (
        <FormContainer className={`${props.move ? 'move' : ''} register`} width={props.width}>
            <RegisterFormContent>
                <h1>Registrate</h1>

                <RegisterForm onSubmit={(e: FormEvent<HTMLFormElement>) => RegisterNewUser(e, formData, setRedirect, login)}>
                    <DoubleInput>
                        <div>
                            <label htmlFor="name">Ingresa tus Nombres:</label>
                            <Input id="name" name="name" type="text" placeholder="Nombres" value={formData.name} onChange={onChange}/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Ingresa tus Apellidos:</label>
                            <Input id="lastName" name="lastName" type="text" placeholder="Apellidos" value={formData.lastName} onChange={onChange}/>
                        </div>
                    </DoubleInput>
                    <div>
                        <label htmlFor="email">Ingresa tu correo:</label>
                        <Input id="email" name="email" type="email" placeholder="Correo" value={formData.email} onChange={onChange}/>
                    </div>
                    <DoubleInput>
                        <div>
                            <label htmlFor="password">Ingresa tu contraseña:</label>
                            <Input id="password" name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={onChange}/>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Contraseña" value={formData.confirmPassword} onChange={onChange}/>
                        </div>
                    </DoubleInput>

                    <div className="buttons">
                        <Button type="button" onClick={() => setRedirect(true)} danger>Regresar</Button>
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
