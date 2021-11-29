import axios from "axios";
import { Ballot, Response } from "../interfaces";
import { PaymentObjectProps } from "../types/components/containers";

const baseUrl = 'http://localhost:8081/';

const ballotServices = {
    register: async (object: PaymentObjectProps, token: string) => {
        const urlRegister = `${baseUrl}ballots/register`;

        const res = await axios.post(urlRegister, object, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => res.data as Response)
        return res;
    },
    getAllBallotWithToken: async (token: string) => {
        const urlGetAll = `${baseUrl}ballots/with-token`;

        const res = await axios.get(urlGetAll, {
            headers: {
                'Authorization': token
            }
        })
            .then(res => res.data as Ballot[])
        return res;
    }
}

export default ballotServices;