import { BsPlusLg, BsTrash } from 'react-icons/bs';
import { Product } from '../../../../interfaces';
import { useContext } from 'react';
import { ShoppingCarContext } from '../../../../contexts';
import { Button } from '../../../common';
import { SCProductContent } from './ShoppingCar.elements';

type props = {
    product: Product
}

const SCProductItem = ({product}: props) => {
    const { toggleShooppingCar, removeShooppingCar } = useContext(ShoppingCarContext);

    return (
        <SCProductContent key={product.id}>
            <img src={product.image} alt="asd"/>
            <div>
                <p>{product.name}</p>
                <p>S/.{product.price}</p>
            </div>
            <div>
                <Button transparent onClick={() => removeShooppingCar(product.id)}>
                    <BsTrash/>
                </Button>
                <input type="number" value={product.cantidad} disabled/>
                <Button transparent onClick={() => toggleShooppingCar(product.id)}>
                    <BsPlusLg/>
                </Button>
            </div>
        </SCProductContent>
    )
}

export default SCProductItem
