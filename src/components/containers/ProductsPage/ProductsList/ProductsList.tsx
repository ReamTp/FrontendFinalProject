import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useCategory from '../../../../hooks/useCategories';
import useProductModal from '../../../../hooks/useProductModal';
import useProducts from '../../../../hooks/useProducts';
import { ProductsListProps } from '../../../../types/components/containers';
import { Container } from '../../../common'
import Modal from '../../ModalProduct'
import { PLCategoriesContainer, PLCategoriesContainerMain, PLCategoriesTitle, PLProduct, PLProductsContainer, ProductsListContainer } from './ProductsList.elements'

const ProductsList = (props: ProductsListProps) => {
    const categories = useCategory();
    const [open, isOpen, cant, addCant, removeCant] = useProductModal();
    const [id, setId] = useState<number>(1);
    const [category, setCategoryId] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const products = useProducts(typeof(props.value) === "number" ? category : search);

    useEffect(() => {
        props.params && props.value && typeof(props.value) === "number" ? setCategoryId(props.value) : props.params && props.value && typeof(props.value) === "string" ? setSearch(props.value) : setCategoryId(0);
    }, [props.value, props.params])

    useEffect(() => console.log("Products:",products), [products]);

    return (
        <ProductsListContainer>
            <Container>
                <PLCategoriesContainerMain>
                    <PLCategoriesTitle>Categorias</PLCategoriesTitle>
                    <PLCategoriesContainer>
                        <Link to='/products'>Todos</Link>
                        {categories.map(category => <Link key={category.id} to={`/products/category/${category.id}-${category.name}`}>{category.name}</Link>)}
                    </PLCategoriesContainer>
                </PLCategoriesContainerMain>
                <PLProductsContainer>
                    <h4>Productos</h4>

                    <div>
                        {products.map(product => (
                            <PLProduct key={product.id} openModal={isOpen} img={product.image} product={{id: product.id, name: product.name, price: product.price, cantidad: 1, image: product.image}} setId={setId}/>
                        ))}
                    </div>
                </PLProductsContainer>
            </Container>
            <Modal id={id} open={open} isOpen={isOpen} cant={cant} addCant={addCant} removeCant={removeCant} />
        </ProductsListContainer>
    )
}

export default ProductsList
