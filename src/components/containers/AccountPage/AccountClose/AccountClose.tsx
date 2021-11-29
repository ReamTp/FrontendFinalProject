import { useContext } from 'react';
import { UserContext } from '../../../../contexts';
import img from '../../../../resources/closeAccount.png';
import { userServices } from '../../../../services';
import { createToast } from '../../../../utils';
import { Button } from '../../../common';
import { AccountCloseContainer, AccountCloseImage, AccountCloseInfo } from './AccountClose.elements';

const AccountClose = () => {
    const { userState, logout } = useContext(UserContext);

    const closeAccount = () => {
        userServices.closeAccount(userState.token)
        .then(res => {
            if (res.status){
                createToast('success', res.message)
                logout();
            } else {
                createToast('error', res.message);
            }
        });
    }

    return (
        <AccountCloseContainer>
            <h2>¿Estás seguro de querer cerrar tu cuenta?</h2>

            <AccountCloseInfo>
                <p>Ten en cuenta de que si cierras tu cuenta perdaras toda la información almancenada en la misma.</p>
                <AccountCloseImage>
                    <img src={img} alt="Mochilero"/>
                    <p>
                        Illustration by <a rel="noreferrer" target="_blank" href="https://icons8.com/illustrations/author/6023f2cd123f99000e63cdd1">Anna Antipina</a> from <a rel="noreferrer" target="_blank" href="https://icons8.com/illustrations">Ouch!</a>
                    </p>
                </AccountCloseImage>
            </AccountCloseInfo>

            <Button onClick={() => closeAccount()} danger>Cerrar mi Cuenta</Button>
        </AccountCloseContainer>
    )
}

export default AccountClose
