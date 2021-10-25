import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Button, Container, Input } from '../../../common';
import { ContainerBannerHP, ImageContent, InfoContent, SearchInputContent, TitleContent } from './BannerHP.elements'
import burgerImg from '../../../../resources/burgerImg.png';

const BannerHp = () => {
    return (
        <ContainerBannerHP>
            <Container>
                <InfoContent>
                    <TitleContent>
                        <div className="title">
                            <h2>Bienvenido a</h2>
                            <h2>La Consegna</h2>
                            <p>La mejor comida rápida en el mejor lugar <b>a un solo click.</b></p>
                        </div>
                    </TitleContent>
                    <SearchInputContent>
                        <Input placeholder="Buscar..."/>
                        <Button warning>
                            <BiSearchAlt/>
                        </Button>
                    </SearchInputContent>
                </InfoContent>
                <ImageContent>
                    <img src={burgerImg} alt="BurgerImage"/>
                </ImageContent>
            </Container>
        </ContainerBannerHP>
    )
}

export default BannerHp
