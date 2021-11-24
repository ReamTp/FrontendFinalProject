import { useEffect, useState } from "react";
import { Category } from "../interfaces";
import categoryServices from "../services/Category";

const useCategory = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getData = async () => {
        const res = await categoryServices.getCities();

        console.log(res);
        setCategories(res);
    }

    useEffect(() => {
        getData();
    }, [])

    return categories;
}

export default useCategory;