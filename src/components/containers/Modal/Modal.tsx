import React, { FormEvent } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ModalProps } from '../../../types/components/containers'
import { Button } from '../../common'
import { ModalBackground, ModalContainer, ModalImage, ModalInfo } from './Modal.elements'

const Modal = ({open, isOpen, cant, addCant, removeCant}: ModalProps) => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <ModalBackground className={open ? "" : "hidden"} onClick={() => isOpen()}/>
            <ModalContainer className={open ? "" : "hidden"}>
                <AiOutlineClose id="closeModal" onClick={() => isOpen()}/>
                <ModalImage>
                    <img src="https://via.placeholder.com/200x200" alt="product"/>
                </ModalImage>
                <ModalInfo onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
                    <h2>Product Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut optio nemo architecto veniam, atque ipsam ratione quaerat, neque odio aperiam iusto amet, fuga error dolorum nobis velit assumenda a! Nemo!</p>
                    <p>$85.36</p>

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

                    <Button type="submit" onClick={() => isOpen()}success>Agregar al carrito</Button>
                </ModalInfo>
            </ModalContainer>
        </>
    )
}

export default Modal
