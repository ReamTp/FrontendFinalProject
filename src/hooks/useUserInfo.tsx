import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts";
import { User } from "../interfaces";
import { userServices } from "../services";

const useUserInfo = () => {
    const { userState } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState<User>({} as User);

    const getData = useCallback(async () => {
        if (userState.token) {
            const res = await userServices.getUserWithToken(userState.token);
            setUserInfo(res);
        }
    }, [userState.token])

    useEffect(() => {
        getData();
    }, [getData]);

    return userInfo;
}

export default useUserInfo;