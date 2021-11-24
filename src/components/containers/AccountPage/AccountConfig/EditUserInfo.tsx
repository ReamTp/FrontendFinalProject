import { FormEvent } from "react";
import { UserContextInterface } from "../../../../interfaces";
import { userServices } from "../../../../services";
import { createToast } from "../../../../utils";

type FormDataType = {
    name: string;
    lastName: string;
    email: string;
    direction: string;
    phone: string;
    sex: string;
    city: string;
}

const EditUserInfo = (e: FormEvent<HTMLFormElement>, formData: FormDataType, userState: UserContextInterface) => {
    e.preventDefault();

    const { name, lastName, email, direction, phone, sex, city } = formData;

    const editData = () => {
        const phoneNumber = parseInt(phone)
        const cityId = parseInt(city)
        const sexAbv = sex === "none" ? '' : sex

        userServices.updateUser({name, lastName, email, password: '', direction, phone: phoneNumber, sex: sexAbv, city: {id: cityId}}, userState.token)
            .then(res => {
                res.status ? createToast('success', 'Datos actualizados correctamente') : createToast('error', 'Error al actualizar el usuario')
            })
    }

    (name === "" && lastName === "" && email === "") ? createToast('error', 'Llene los parametros necesarios') : direction.length < 8 && direction.length > 0  ? createToast('error', 'Dirección no Válida') : phone.length < 9 && phone.length > 9 ? createToast('error', 'Teléfono no Válido') : city.length < 3 && city.length < 0 ? createToast('error', 'Ciudad no Válida') : editData();
}

export default EditUserInfo;