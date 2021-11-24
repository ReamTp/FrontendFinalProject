import { createContext } from 'react';
import { UserContextInterface } from '../interfaces';

type UserContextProps = {
    userState: UserContextInterface,
    logout: () => void,
    login: (user: UserContextInterface) => void
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export default UserContext;