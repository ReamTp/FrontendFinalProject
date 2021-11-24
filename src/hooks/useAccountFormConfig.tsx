import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../interfaces";

const useAccountFormConfig = (user: User) => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [direction, setDirection] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [sex, setSex] = useState<string>('none');
    const [city, setCity] = useState<string>('none');

    useEffect(() => {
        setName(user.name);
        setLastName(user.lastName);
        setEmail(user.email);
        setDirection(user.direction ? user.direction : '');
        setPhone((user.phone && user.phone !== 0) ? user.phone.toString() : '');
        setSex(user.sex ? user.sex : 'none');
        setCity(user.city && typeof(user.city) === 'object' ? user.city.id.toString() : 'none');
    }, [user]);

    const formData = {
        name,
        lastName,
        email,
        direction,
        phone,
        sex,
        city
    }

    const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'direction':
                setDirection(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'sex':
                setSex(value);
                console.log(sex);
                break;
            case 'city':
                setCity(value);
                break;
        }
    }

    return [formData, onChange] as const;
}

export default useAccountFormConfig;