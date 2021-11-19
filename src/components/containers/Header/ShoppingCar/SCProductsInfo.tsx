import { Button } from '../../../common';
import { BsTrash, BsPlusLg } from "react-icons/bs";
import { SCProductContent, SCProductsContent, SCProductsHeader, ShoppingCarFooter, ShoppingCarProducts, ShoppingCarTitle } from './ShoppingCar.elements';
import burder from '../../../../resources/burgerImg.png';
import { ShoppingCarProdutcsProps } from '../../../../types/components/containers';

const SCProductsInfo = (props: ShoppingCarProdutcsProps) => {
    return (
        <>
            <ShoppingCarProducts heigth={props.heigth}>
                <SCProductsHeader>
                    <ShoppingCarTitle>Tus Productos</ShoppingCarTitle>
                </SCProductsHeader>
                <SCProductsContent>
                    {props.products && props.products.map(product => (
                        <SCProductContent>
                            <img src={burder} alt="asd"/>
                            <div>
                                <p>Product Name</p>
                                <p>S/.0.00</p>
                            </div>
                            <div>
                                <Button transparent>
                                    <BsTrash/>
                                </Button>
                                <input type="number" value="1" disabled/>
                                <Button transparent>
                                    <BsPlusLg/>
                                </Button>
                            </div>
                        </SCProductContent>
                    ))}
                </SCProductsContent>
                <ShoppingCarFooter>
                    <Button transparent>
                        <BsTrash/>
                    </Button>
                    <Button success>
                        <span>Ir a pagar</span>
                        <span>Sub Total:</span>
                        <span>S/.00.00</span>
                    </Button>
                </ShoppingCarFooter>
            </ShoppingCarProducts>
        </>
    )
}

export default SCProductsInfo;
