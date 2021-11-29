import { Button, ButtonLink } from '../../../common';
import { SCProductsContent, SCProductsHeader, ShoppingCarFooter, ShoppingCarProducts, ShoppingCarTitle } from './ShoppingCar.elements';
import { ShoppingCarProdutcsProps } from '../../../../types/components/containers';
import SCProductItem from './SCProductItem';
import { BsTrash } from 'react-icons/bs';
import { useContext } from 'react';
import { ShoppingCarContext } from '../../../../contexts';

const SCProductsInfo = (props: ShoppingCarProdutcsProps) => {
    const { removeAllShoppingCar } = useContext(ShoppingCarContext);

    return (
        <>
            <ShoppingCarProducts heigth={props.heigth}>
                <SCProductsHeader>
                    <ShoppingCarTitle>Tus Productos</ShoppingCarTitle>
                </SCProductsHeader>
                <SCProductsContent>
                    {props.products && props.products.map(product => (
                        <SCProductItem key={product.id} product={product}/>
                    ))}
                </SCProductsContent>
                <ShoppingCarFooter>
                    <Button onClick={() => removeAllShoppingCar()} transparent>
                        <BsTrash/>
                    </Button>
                    <ButtonLink to="/buy" success="true">
                        <span>Ir a pagar</span>
                        <span>Sub Total:</span>
                        <span>S/.{props.total}</span>
                    </ButtonLink>
                </ShoppingCarFooter>
            </ShoppingCarProducts>
        </>
    )
}

export default SCProductsInfo;
