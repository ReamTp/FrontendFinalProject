import axios from "axios";
import { ProductReact } from "../interfaces";

const baseUrl = 'http://localhost:8081';

const productServices = {
    getAllProducts: async () => {
        const res = await axios.get(`${baseUrl}/products`)
            .then(res => res.data as ProductReact[]);
        return res;
    },
    getAllProductsByCategory: async (id: number) => {
        const res = await axios.get(`${baseUrl}/products/category/${id}`)
            .then(res => res.data as ProductReact[]);
        return res;
    },
    getAllProductsBySearch: async (search: string) => {
        const res = await axios.get(`${baseUrl}/products/search/${search}`)
            .then(res => {
                console.log("ProductsSearch:", res.data);
                return res.data as ProductReact[];
            });
        return res;
    },
    getProduct: async (id: number) => {
        const urlProduct = `${baseUrl}/products/${id}`;
        const res = await axios.get(urlProduct)
            .then(res => res.data as ProductReact)
        return res;
    }
}

export default productServices;