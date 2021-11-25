import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ListPage } from '../views'

const ProductsRouter = () => {
    return (
        <Switch>
            <Route exact path="/products/search/" component={ListPage}/>
            <Route exact path="/products/search/:search" component={ListPage}/>
            <Route exact path="/products/category/:id-:name" component={ListPage}/>
            <Route exact path="/products" component={ListPage}/>
            <Redirect to="/404"/>
        </Switch>
    )
}

export default ProductsRouter
