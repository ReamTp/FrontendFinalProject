import { useEffect, useState } from "react";
import { ProductReact } from "../interfaces";
import { productServices } from "../services";

const useSearchProducts = (search: string) => {
    const [products, setProducts] = useState<ProductReact[]>([]);

    const getProducts = async () => {
        const res = await productServices.getAllProducts();
        setProducts(res);
    };

    const getProductsBySearch = async (value: string) => {
        const res = await productServices.getAllProductsBySearch(value);
        setProducts(res);
    };

    useEffect(() => {
        search === '' ? getProducts() : getProductsBySearch(search);
    }, [search])

    return products;
}

export default useSearchProducts;
