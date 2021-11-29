import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts';
import { Ballot } from '../interfaces';
import ballotServices from '../services/Ballot';

const useOrders = () => {
    const [orders, setOrders] = useState<Ballot[]>([])
    const { userState } = useContext(UserContext)

    useEffect(() => {
        ballotServices.getAllBallotWithToken(userState.token)
            .then(res => {
                setOrders(res);
            });
    }, [userState.token])

    return orders;
}

export default useOrders
