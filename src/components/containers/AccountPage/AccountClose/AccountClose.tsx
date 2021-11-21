import img from '../../../../resources/closeAccount.png';
import { Button } from '../../../common';
import { AccountCloseContainer, AccountCloseImage, AccountCloseInfo } from './AccountClose.elements';

const AccountClose = () => {
    return (
        <AccountCloseContainer>
            <h2>¿Estás seguro de querer cerrar tu cuenta?</h2>

            <AccountCloseInfo>
                <p>Ten en cuenta de que si cierras tu cuenta perdaras toda la información almancenada en la misma.</p>
                <AccountCloseImage>
                    <img src={img} alt="Mochilero"/>
                    <p>
                        Illustration by <a target="_blank" href="https://icons8.com/illustrations/author/6023f2cd123f99000e63cdd1">Anna Antipina</a> from <a target="_blank" href="https://icons8.com/illustrations">Ouch!</a>
                    </p>
                </AccountCloseImage>
            </AccountCloseInfo>

            <Button danger>Cerrar mi Cuenta</Button>
        </AccountCloseContainer>
    )
}

export default AccountClose
