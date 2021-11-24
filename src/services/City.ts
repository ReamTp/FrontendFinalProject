import axios from "axios";
import City from "../interfaces/City";

const baseUrl = 'http://localhost:8081';

const cityServices = {
    getCities: async () => {
        const urlCities = `${baseUrl}/cities`
        const res = await axios.get(urlCities)
            .then(res => res.data as City[])
        return res;
    }
}

export default cityServices;