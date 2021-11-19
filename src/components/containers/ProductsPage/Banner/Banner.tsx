import React from 'react'
import { Container } from '../../../common';
import { BannerContainer, BannerImg } from './Banner.elements';
import img from '../../../../resources/curvedLine.png';
import { BannerProductsProps } from '../../../../types/components/containers';

const Banner = (props: BannerProductsProps) => {
    return (
        <BannerContainer>
            <Container>
                <h2>{props.title}</h2>
            </Container>
            <BannerImg src={img}/>
        </BannerContainer>
    )
}

export default Banner
