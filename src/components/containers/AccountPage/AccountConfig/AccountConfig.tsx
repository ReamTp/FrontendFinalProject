import { FormEvent, useContext } from 'react';
import { UserContext } from '../../../../contexts';
import useAccountFormConfig from '../../../../hooks/useAccountFormConfig';
import useCities from '../../../../hooks/useCities';
import useUserInfo from '../../../../hooks/useUserInfo';
import { Button, Input } from '../../../common'
import { AccountConfigContainer, CheckBoxContent, DoubleInput } from './AccountConfig.elements'
import EditUserInfo from './EditUserInfo';
import { genreList } from "./options.json";

const AccountConfig = () => {
    const cities = useCities();
    const user = useUserInfo();
    const { userState } = useContext(UserContext)
    const [formData, onChange] = useAccountFormConfig(user);

    return (
        <AccountConfigContainer>
            <h2>Mis Datos</h2>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => EditUserInfo(e, formData, userState)}>
                <DoubleInput>
                    <div>
                        <label id="name">Nombre: (*)</label>
                        <Input id="name" type="text" name="name" value={formData.name} onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellidos: (*)</label>
                        <Input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={onChange}/>
                    </div>
                </DoubleInput>
                <DoubleInput>
                    <div>
                        <label htmlFor="email">Correo: (*)</label>
                        <Input id="email" type="email" name="email" value={formData.email} onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <Input id="password" type="password" name="password" disabled/>
                    </div>
                </DoubleInput>
                <DoubleInput>
                    <div>
                        <label htmlFor="direction">Dirección:</label>
                        <Input id="direction" type="text" name="direction" value={formData.direction} onChange={onChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Número de Celular:</label>
                        <Input type="tel" name="phone" value={formData.phone} onChange={onChange}/>
                    </div>
                </DoubleInput>
                <DoubleInput>
                    <CheckBoxContent>
                        <label htmlFor="sex">Género:</label>
                        <select id="sex" name="sex" value={formData.sex} onChange={onChange}>
                            <option value="none" disabled>--- Escoger una opción ---</option>
                            {genreList.map(genre => <option key={genre.id} value={genre.value}>{genre.name}</option>)}
                        </select>
                    </CheckBoxContent>
                    <CheckBoxContent>
                        <label htmlFor="city">Ciudad:</label>
                        <select id="city" name="city" value={formData.city} onChange={onChange}>
                            <option value="none" disabled>--- Escoger una opción ---</option>
                            {cities.map(city => <option key={city.id} value={city.id}>{city.name}</option>)}
                        </select>
                    </CheckBoxContent>
                </DoubleInput>

                 <Button type="submit" success>Guardar Datos</Button>
            </form>
        </AccountConfigContainer>
    )
}

export default AccountConfig
