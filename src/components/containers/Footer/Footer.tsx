import { Container, ImageCircle } from '../../common';
import { FooterContainer } from './Footer.elements';
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <div className="socialMedia">
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                        <ImageCircle image={FaFacebookF}/>
                    </a>
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                        <ImageCircle image={BsInstagram}/>
                    </a>
                    <a href="https://twitter.com/?lang=en" rel="noreferrer" target="_blank">
                        <ImageCircle image={BsTwitter}/>
                    </a>
                </div>
                <p>&copy; 2021 Todos los derechos reservados</p>
            </Container>
        </FooterContainer>
    )
}

export default Footer
