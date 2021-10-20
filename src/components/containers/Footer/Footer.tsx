import Container from '../../common/Containers';
import ImageCircle from '../../common/ImageCircle';
import { FooterContainer } from './Footer.elements';
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <div className="socialMedia">
                    <ImageCircle image={FaFacebookF}/>
                    <ImageCircle image={BsInstagram}/>
                    <ImageCircle image={BsTwitter}/>
                </div>
                <p>&copy; 2021 Todos los derechos reservados</p>
            </Container>
        </FooterContainer>
    )
}

export default Footer
