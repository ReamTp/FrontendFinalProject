import { useEffect, useState } from "react";
import { TokenUser } from "../types/global/types";

const useAccessUser = () => {
    const [user, setUser] = useState<TokenUser | null>(null);

    useEffect(() => {
        if (typeof(Storage) !== "undefined") {
            const token = localStorage.getItem("token") as TokenUser;
            setUser(token);
        }
    }, []);

    const saveToken = (token: TokenUser) => {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("token", token);
            setUser(token);
        }
    }

    return [user, saveToken];
}

export default useAccessUser;
