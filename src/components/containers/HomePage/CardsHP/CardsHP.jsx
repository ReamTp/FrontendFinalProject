import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import useModal from '../../../../hooks/useProductModal';
import { Container, Button } from '../../../common';
import Modal from '../../ModalProduct';
import { CardsHPContainer, ButtonContainer, CardContainer, CardInfo, CardTitleContainer, CardTSubitleContainer, Card, CardImg } from './CardsHP.elements';

const CardsHP = () => {
    const [open, isOpen, cant, addCant, removeCant] = useModal();

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
                        <h3>Nuestros Productos</h3>
                        <Link to='/products'>Ver más...</Link>
                    </CardTSubitleContainer>
                    <ButtonContainer>
                        <Button transparent><AiOutlineLeft/></Button>
                        <Button transparent><AiOutlineRight/></Button>
                    </ButtonContainer>
                </CardTitleContainer>
                <CardContainer>
                    {products.map(product => (
                        <Card onClick={() => isOpen()}>
                            <CardImg img={product.img}/>
                            <CardInfo>
                                <h4>{product.title}</h4>
                                <p>{product.price}</p>
                            </CardInfo>
                        </Card>
                    ))}
                </CardContainer>
            </Container>
            <Modal id={1} open={open} isOpen={isOpen} cant={cant} addCant={addCant} removeCant={removeCant} />
        </CardsHPContainer>
    )
}

export default CardsHP;