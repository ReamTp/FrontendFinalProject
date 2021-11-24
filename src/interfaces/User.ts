import City from "./City";

export default interface User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone?: number;
    direction?: string;
    city?: City | {id: number};
    sex?: string;
    avatar?: string;
    state?: boolean;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserContextInterface {
    token: string;
    abv: string;
    result?: boolean;
}
