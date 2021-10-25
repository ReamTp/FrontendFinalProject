import React from 'react';
import { Container, ImageCircle } from '../../../common';
import { AboutContainer, AboutInfoContainer, AboutInfosContainer, AboutTitleContainer } from './AboutHP.elements';
import { FaMedal, FaRegClock } from 'react-icons/fa';
import { MdPriceCheck } from 'react-icons/md';

const AboutHP = () => {
    const size = 97;

    return (
        <AboutContainer>
            <Container>
                <AboutTitleContainer>
                    <p>Pide en un solo lugar</p>
                    <h2>Haz tu pedido y el resto dejanolo a nosotros</h2>
                </AboutTitleContainer>
                <AboutInfosContainer>
                    <AboutInfoContainer>
                        <ImageCircle noHover size={size} image={FaRegClock}/>
                        <h3>Entrega a tiempo</h3>
                        <p>Corremos para que tu comida entregarte rapido tu comida.</p>
                    </AboutInfoContainer>
                    <AboutInfoContainer>
                        <ImageCircle noHover size={size} image={FaMedal}/>
                        <h3>Calidad</h3>
                        <p>Seleccionamos los mejores productos de la más alta calidad para ti.</p>
                    </AboutInfoContainer>
                    <AboutInfoContainer>
                        <ImageCircle noHover size={size} image={MdPriceCheck}/>
                        <h3>Precios Accesibles</h3>
                        <p>Los precios más accesibles para que puedas dar un gustito.</p>
                    </AboutInfoContainer>
                </AboutInfosContainer>
            </Container>
        </AboutContainer>
    )
}

export default AboutHP
