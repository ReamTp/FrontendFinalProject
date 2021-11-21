import React from 'react'
import { Button, Input } from '../../../common'
import { AccountConfigContainer, DoubleInput } from './AccountConfig.elements'

const AccountConfig = () => {
    return (
        <AccountConfigContainer>
            <h2>Mis Datos</h2>
            <form>
                <DoubleInput>
                    <div>
                        <label>Nombre:</label>
                        <Input type="text" name="name"/>
                    </div>
                    <div>
                        <label>Apellidos:</label>
                        <Input type="text" name="lastName"/>
                    </div>
                </DoubleInput>
                <DoubleInput>
                    <div>
                        <label>Correo:</label>
                        <Input type="email" name="email"/>
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <Input type="password" name="password"/>
                    </div>
                </DoubleInput>
                <DoubleInput>
                    <div>
                        <label>Dirección:</label>
                        <Input type="text" name="direction"/>
                    </div>
                    <div>
                        <label>Número de Celular:</label>
                        <Input type="tel" name="phoneNumber" />
                    </div>
                </DoubleInput>

                 <Button type="submit" success>Guardar Datos</Button>
            </form>
        </AccountConfigContainer>
    )
}

export default AccountConfig
