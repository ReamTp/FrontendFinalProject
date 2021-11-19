import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useModal from '../../../../hooks/useModal';
import { Container } from '../../../common'
import Modal from '../../Modal'
import { PLCategoriesContainer, PLCategoriesContainerMain, PLCategoriesTitle, PLProduct, PLProductsContainer, ProductsListContainer } from './ProductsList.elements'

const ProductsList = () => {
    const [categories, setCategories] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}]);
    const [open, isOpen, cant, addCant, removeCant] = useModal();

    return (
        <ProductsListContainer>
            <Container>
                <PLCategoriesContainerMain>
                    <PLCategoriesTitle>Categorias</PLCategoriesTitle>
                    <PLCategoriesContainer>
                        {categories.map((category, i) => <Link key={category.id} to={`/products/category/${category.id}-${category}`}>Hamburguesas</Link>)}
                    </PLCategoriesContainer>
                </PLCategoriesContainerMain>
                <PLProductsContainer>
                    <h4>Productos</h4>

                    <div>
                        {categories.map(c => (
                            <PLProduct openModal={isOpen} img="https://via.placeholder.com/200x200" product={{name: "Hola", price: 56}}/>
                        ))}
                    </div>
                </PLProductsContainer>
            </Container>
            <Modal id={1} open={open} isOpen={isOpen} cant={cant} addCant={addCant} removeCant={removeCant} />
        </ProductsListContainer>
    )
}

export default ProductsList
