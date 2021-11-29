import React from 'react'
import { useParams } from 'react-router-dom'
import { ViewContainer } from '../../components/common'
import { Banner } from '../../components/containers/ProductsPage'
import ProductsList from '../../components/containers/ProductsPage/ProductsList'
import { CategoryParamProps, ProductSearchParamProps } from '../../types/router/params'

const ListPage = () => {
    const {id, name} = useParams<CategoryParamProps>();
    const {search} = useParams<ProductSearchParamProps>();
    const [isCategory, setIsCategory] = React.useState<boolean>(false);
    const [isSearch, setIsSearch] = React.useState<boolean>(false);
    const [params, setParams] = React.useState<boolean>(false);

    React.useEffect(() => {
        name !== undefined ? setIsCategory(true) : setIsCategory(false);
    }, [name]);

    React.useEffect(() => {
        search !== undefined && name === undefined ? setIsSearch(true) : setIsSearch(false);
    }, [name, search]);

    React.useEffect(() => {
        (id !== undefined && name !== undefined) || search !== undefined ? setParams(true) : setParams(false);
    }, [id, name, search]);

    return (
        <ViewContainer>
            <Banner title={isCategory ? name : isSearch ? `Resultados de buscar: ${search}` : 'Nuestros Productos'}/>
            {params && isCategory ? <ProductsList params={params} value={parseInt(id)} /> : params && isSearch ? <ProductsList params={params} value={search}/> : <ProductsList params={params} value={0} />}
        </ViewContainer>
    )
}

export default ListPage
