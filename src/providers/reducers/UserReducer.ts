import { UserContextInterface } from "../../interfaces";

type UserAction =
    | { type: "login"; user: UserContextInterface }
    | { type: "logout" }
    | { type: "register"; user: UserContextInterface }

const UserReducer = (state: UserContextInterface, action: UserAction): UserContextInterface => {
    switch (action.type) {
        case "login":
            localStorage.setItem('user', JSON.stringify(action.user));

            return action.user;
        case "logout":
            const emptyUser: UserContextInterface = {
                token: "",
                abv: "",
                result: false
            }

            localStorage.setItem('user', JSON.stringify(emptyUser));
            return emptyUser;
        default:
            return state;
    }
}

export default UserReducer;
