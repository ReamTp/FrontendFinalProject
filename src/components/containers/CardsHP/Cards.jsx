import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CardContainer, CardTitleContainer, CardTSubitleContainer, Card, CardH4, CardImg, CardP } from './Cards.elements';

const cards = () => {
    return(
        <div>
            <CardTitleContainer>
                <CardTSubitleContainer>
                    <h3>Productos mas vendidos</h3>
                    <button>Ver mas...</button>
                </CardTSubitleContainer>
                <div>
                    <button><AiOutlineLeft/></button>
                    <button><AiOutlineRight/></button>
                </div>
            </CardTitleContainer>
            <CardContainer>
                <Card>
                    <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif"/>
                    <CardH4>Titulo</CardH4>
                    <CardP>precio</CardP>
                </Card>

                <Card>
                    <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif"/>
                    <CardH4>Titulo</CardH4>
                    <CardP>precio</CardP>
                </Card>

                <Card>
                    <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif"/>
                    <CardH4>Titulo</CardH4>
                    <CardP>precio</CardP>
                </Card>

                <Card>
                    <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif"/>
                    <CardH4>Titulo</CardH4>
                    <CardP>precio</CardP>
                </Card>

                <Card>
                    <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Win3x_Black_Screen_of_Death.gif/320px-Win3x_Black_Screen_of_Death.gif"/>
                    <CardH4>Titulo</CardH4>
                    <CardP>precio</CardP>
                </Card>
            </CardContainer>
        </div>

        
    )
}

export default cards