import React from 'react'
import { useParams } from 'react-router-dom'
import { ViewContainer } from '../../components/common'
import { Banner } from '../../components/containers/ProductsPage'
import ProductsList from '../../components/containers/ProductsPage/ProductsList'
import { CategoryParamProps } from '../../types/router/params'

const ListPage = () => {
    const {id, name} = useParams<CategoryParamProps>();
    const [isCategory, setIsCategory] = React.useState(false);

    React.useEffect(() => {
        name !== undefined && setIsCategory(true);
    }, [name]);

    return (
        <ViewContainer>
            <Banner title={isCategory ? name : 'Nuestros Productos'}/>
            <p>{`id: ${id} - name: ${name}`}</p>
            <ProductsList/>
        </ViewContainer>
    )
}

export default ListPage
