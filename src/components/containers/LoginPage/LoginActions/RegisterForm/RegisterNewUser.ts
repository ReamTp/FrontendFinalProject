import { FormEvent } from "react";
import { UserContextInterface } from "../../../../../interfaces";
import { userServices } from "../../../../../services";
import { createToast } from "../../../../../utils";

type FormDataType = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterNewUser = (e: FormEvent<HTMLFormElement>, formData: FormDataType, setRedirect: React.Dispatch<React.SetStateAction<boolean>>, login: (user: UserContextInterface) => void) => {
    e.preventDefault();

    const { name, lastName, email, password, confirmPassword } = formData;

    const setRegister = () => {
        userServices.register(formData).then(res => {
            login(res);
            if(res.result) {
                createToast('success', 'Usuario registrado correctamente');
                setRedirect(true)
            }
        });
    }


    (name === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") ? createToast('error', 'Llene todos los campos primero') : (name.length <= 2) ? createToast('error', 'Nombre no valido') : (lastName.length <= 2) ? createToast('error', 'Apellido no valido') : (email.length <= 11) ? createToast('error', 'Email no es válido') : (password.length < 8) ? createToast('error', 'La contraseña debe tener 8 caracteres!') : (confirmPassword !== password) ? createToast('error', 'Las Contraseñas debe coincidir') : setRegister();
}

export default RegisterNewUser;
