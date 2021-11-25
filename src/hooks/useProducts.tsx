import { useEffect, useState } from "react";
import { ProductReact } from "../interfaces";
import { productServices } from "../services";

const useProducts = (value: number | string) => {
    const [products, setProducts] = useState<ProductReact[]>([]);

    const getProducts = async () => {
        const res = await productServices.getAllProducts();
        setProducts(res);
    };

    const getProductsByCategory = async (id: number) => {
        const res = await productServices.getAllProductsByCategory(id);
        setProducts(res);
    }

    const getProductsBySearch = async (value: string) => {
        const res = await productServices.getAllProductsBySearch(value);
        setProducts(res);
    };

    useEffect(() => {
        value === 0 ? getProducts() : typeof(value) === "number" ? getProductsByCategory(value) : getProductsBySearch(value);
    }, [value])

    return products;
}

export default useProducts;
