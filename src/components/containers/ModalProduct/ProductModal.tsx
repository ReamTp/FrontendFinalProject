import { FormEvent, useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ShoppingCarContext } from '../../../contexts'
import useGetProduct from '../../../hooks/useGetProduct'
import { Product } from '../../../interfaces'
import { ProductModalProps } from '../../../types/components/containers'
import { Button } from '../../common'
import { ModalBackground, ModalContainer, ModalImage, ModalInfo } from './ModalProduct.elements'

const ProductModal = ({id, open, isOpen, cant, addCant, removeCant}: ProductModalProps) => {
    const product = useGetProduct(id);
    const { addProduct } = useContext(ShoppingCarContext);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const onClick = () => {
        isOpen();
        const newProduct: Product = {id: product.id, name: product.name, price: product.price, cantidad: cant, image: product.image};

        addProduct(newProduct);
    }

    return (
        <>
            <ModalBackground className={open ? "" : "hidden"} onClick={() => isOpen()}/>
            <ModalContainer className={open ? "" : "hidden"}>
                <AiOutlineClose id="closeModal" onClick={() => isOpen()}/>
                <ModalImage>
                    <img src={product.image} alt="product"/>
                </ModalImage>
                <ModalInfo onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
                    <h2>{product.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut optio nemo architecto veniam, atque ipsam ratione quaerat, neque odio aperiam iusto amet, fuga error dolorum nobis velit assumenda a! Nemo!</p>
                    <p>S/ {product.price && product.price.toFixed(2).toString()}</p>

                    <div>
                        <label>Cantidad:</label>
                        <div onClick={() => removeCant()}>
                            <AiOutlineMinus/>
                        </div>
                        <input type="number" value={cant.toString()} disabled/>
                        <div onClick={() => addCant()}>
                            <AiOutlinePlus/>
                        </div>
                    </div>

                    <Button type="submit" onClick={() => onClick()}success>Agregar al carrito</Button>
                </ModalInfo>
            </ModalContainer>
        </>
    )
}

export default ProductModal;
