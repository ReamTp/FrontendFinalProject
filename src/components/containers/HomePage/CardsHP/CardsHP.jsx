import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Container, Button } from '../../../common';
import { CardsHPContainer, ButtonContainer, CardContainer, CardInfo, CardTitleContainer, CardTSubitleContainer, Card, CardImg } from './CardsHP.elements';

const CardsHP = () => {
    const products = [
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif',
            title: 'Карта памяти',
            price: '1 000 ₽',
        },
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif',
            title: 'Карта памяти',
            price: '1 000 ₽',
        },
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif',
            title: 'Карта памяти',
            price: '1 000 ₽',
        },
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif',
            title: 'Карта памяти',
            price: '1 000 ₽',
        },
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif',
            title: 'Карта памяти',
            price: '1 000 ₽',
        },
    ]

    return(
        <CardsHPContainer>
            <Container>
                <CardTitleContainer>
                    <CardTSubitleContainer>
                        <h3>Productos mas vendidos</h3>
                        <button>Ver más...</button>
                    </CardTSubitleContainer>
                    <ButtonContainer>
                        <Button transparent><AiOutlineLeft/></Button>
                        <Button transparent><AiOutlineRight/></Button>
                    </ButtonContainer>
                </CardTitleContainer>
                <CardContainer>
                    {products.map(product => (
                        <Card>
                            <CardImg img={product.img}/>
                            <CardInfo>
                                <h4>{product.title}</h4>
                                <p>{product.price}</p>
                            </CardInfo>
                        </Card>
                    ))}
                </CardContainer>
            </Container>
        </CardsHPContainer>
    )
}

export default CardsHP;