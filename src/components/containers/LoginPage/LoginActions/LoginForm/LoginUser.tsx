import { FormEvent } from "react";
import { UserContextInterface } from "../../../../../interfaces";
import { userServices } from "../../../../../services";
import { createToast } from "../../../../../utils";

type FormDataType = {
    email: string;
    password: string;
}

const LoginUser = (e: FormEvent<HTMLFormElement>, formData: FormDataType, setRedirect: React.Dispatch<React.SetStateAction<boolean>>, login: (user: UserContextInterface) => void) => {
    e.preventDefault();

    const { email, password } = formData;

    const setLogin = () => {
        userServices.login(formData).then(res => {
            login(res);
            if (res.result) {
                createToast('success', 'Inicio de Sesión Correcto')
                setRedirect(true)
            } else {
                createToast('error', 'Credenciales incorrectas')
            }
        });
    }


    (email === "" || password === "") ? createToast('error', 'Llene todos los campos primero') : (email.length <= 11) ? createToast('error', 'Email no es válido') : (password.length < 8) ? createToast('error', 'La contraseña debe tener 8 caracteres!') : setLogin();
}

export default LoginUser;
