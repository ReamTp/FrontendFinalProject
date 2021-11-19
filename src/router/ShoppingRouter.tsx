import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ShoppingLayout } from '../components/layouts';

const ShoppingRouter = () => {
    return (
        <ShoppingLayout>
            <Switch>
                <Route exact path='/buy' component={Asd}/>
                <Redirect from="*" to="/404" />
            </Switch>
        </ShoppingLayout>
    )
}

const Asd = () => {
    return(
        <h1>asdasd</h1>
    )
}

export default ShoppingRouter
