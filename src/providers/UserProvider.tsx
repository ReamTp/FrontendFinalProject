import { useReducer } from "react";
import { UserContext } from "../contexts";
import { UserContextInterface } from "../interfaces";
import { DefaultContentProps } from "../types/components/common";
import UserReducer from "./reducers/UserReducer";

const initialState = (): UserContextInterface => {
    const user = localStorage.getItem('user');

    const userObject = JSON.parse(user ? user : '{"token":"","abv":""}');

    return userObject;
}

const UserProvider = ({ children }: DefaultContentProps) => {
    const [userState, dispatch] = useReducer(UserReducer, initialState());

    const login = (user: UserContextInterface) => {
        dispatch({ type: 'login', user: user });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    return (
        <UserContext.Provider value={{
            userState,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;