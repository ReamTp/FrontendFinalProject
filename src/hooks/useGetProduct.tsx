import { useCallback, useEffect, useState } from "react";
import { ProductReact } from "../interfaces";
import { productServices } from "../services";

const useGetProduct = (id: number) => {
    const [product, setProduct] = useState<ProductReact>({} as ProductReact);

    const getProduct = useCallback(async () => {
        const res = await productServices.getProduct(id);
        setProduct(res);
    }, [id]);

    useEffect(() => {
        getProduct();
    }, [getProduct])

    return product;
}

export default useGetProduct;