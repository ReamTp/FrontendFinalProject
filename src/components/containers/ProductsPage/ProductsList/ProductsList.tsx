import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useCategory from '../../../../hooks/useCategories';
import useProductModal from '../../../../hooks/useProductModal';
import { Container } from '../../../common'
import Modal from '../../ModalProduct'
import { PLCategoriesContainer, PLCategoriesContainerMain, PLCategoriesTitle, PLProduct, PLProductsContainer, ProductsListContainer } from './ProductsList.elements'

const ProductsList = () => {
    const categories = useCategory();
    const [open, isOpen, cant, addCant, removeCant] = useProductModal();

    return (
        <ProductsListContainer>
            <Container>
                <PLCategoriesContainerMain>
                    <PLCategoriesTitle>Categorias</PLCategoriesTitle>
                    <PLCategoriesContainer>
                        {categories.map((category, i) => <Link key={category.id} to={`/products/category/${category.id}-${category.name}`}>{category.name}</Link>)}
                    </PLCategoriesContainer>
                </PLCategoriesContainerMain>
                <PLProductsContainer>
                    <h4>Productos</h4>

                    <div>
                        {categories.map(c => (
                            <PLProduct openModal={isOpen} img="https://via.placeholder.com/200x200" product={{id: 1, name: "Hola", price: 56, cantidad: 1}}/>
                        ))}
                    </div>
                </PLProductsContainer>
            </Container>
            <Modal id={1} open={open} isOpen={isOpen} cant={cant} addCant={addCant} removeCant={removeCant} />
        </ProductsListContainer>
    )
}

export default ProductsList
