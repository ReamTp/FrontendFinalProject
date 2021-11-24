import axios from "axios";
import { Response, User, UserContextInterface, UserLogin } from "../interfaces";

const baseUrl = 'http://localhost:8081';

const userServices = {
    register: async (data: User) => {
        const urlRegisterUser = `${baseUrl}/users/insert`

        const res = await axios.post(urlRegisterUser, data)
            .then(res => res.data as UserContextInterface)
        return res;
    },
    login: async (data: UserLogin) => {
        const urlLoginUser = `${baseUrl}/api/login`

        const res = await axios.post(urlLoginUser, data)
            .then(res => res.data as UserContextInterface)
        return res;
    },
    getUserWithToken: async (token: string) => {
        const urlGetWithToken = `${baseUrl}/users/token`
        console.log("My Token:",token);

        const res = await axios.post(urlGetWithToken, {}, {
            headers: {
                'Authorization': token
            }
        }).then(res => res.data as User);

        return res as User;
    },
    updateUser: async (data: User, token: string) => {
        const urlUpdateUser = `${baseUrl}/users/update`

        const res = await axios.put(urlUpdateUser, data, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => res.data as Response)
        return res;
    }
}

export default userServices;