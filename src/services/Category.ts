import axios from "axios";
import { Category } from "../interfaces";

const baseUrl = 'http://localhost:8081/';

const categoryServices = {
    getCities: async () => {
        const urlCategories = `${baseUrl}categories`
        const res = await axios.get(urlCategories)
            .then(res => res.data as Category[])
        return res;
    }
}

export default categoryServices;