import { useState } from "react";

const useLoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const formLoginData = {
        email,
        password
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'emailLogin':
                setEmail(value);
                break;
            case 'passwordLogin':
                setPassword(value);
                break;
        }
    }

    return [formLoginData, onChange] as const
}

export default useLoginForm;