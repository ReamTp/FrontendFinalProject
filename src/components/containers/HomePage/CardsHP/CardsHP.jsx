import { Link } from 'react-router-dom';
import useModal from '../../../../hooks/useProductModal';
import useProducts from "../../../../hooks/useProducts";
import { Container } from '../../../common';
import Modal from '../../ModalProduct';
import { CardsHPContainer, CardContainer, CardInfo, CardTitleContainer, CardTSubitleContainer, Card, CardImg } from './CardsHP.elements';

const CardsHP = () => {
    const [open, isOpen, cant, addCant, removeCant] = useModal();

    const products = useProducts(0);

    const limitProductsList = products.filter((product, index) => index < 5);

    return(
        <CardsHPContainer>
            <Container>
                <CardTitleContainer>
                    <CardTSubitleContainer>
                        <h3>Nuestros Productos</h3>
                        <Link to='/products'>Ver más...</Link>
                    </CardTSubitleContainer>
                    {/* <ButtonContainer>
                        <Button transparent><AiOutlineLeft/></Button>
                        <Button transparent><AiOutlineRight/></Button>
                    </ButtonContainer> */}
                </CardTitleContainer>
                <CardContainer>
                    {limitProductsList.map(product => (
                        <Card key={product.id} onClick={() => isOpen()}>
                            <CardImg img={product.image}/>
                            <CardInfo>
                                <h4>{product.name}</h4>
                                <p>S/ {product.price.toFixed(2)}</p>
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