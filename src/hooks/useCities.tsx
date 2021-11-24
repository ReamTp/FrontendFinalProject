import { useEffect, useState } from "react";
import City from "../interfaces/City";
import cityServices from "../services/City";

const useCities = () => {
    const [cities, setCities] = useState<City[]>([]);

    const getData = async () => {
        const res = await cityServices.getCities();

        setCities(res);
    }

    useEffect(() => {
        getData();
    }, [])

    return cities;
}

export default useCities;