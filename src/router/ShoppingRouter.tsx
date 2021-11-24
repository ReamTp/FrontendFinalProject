import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ShoppingLayout } from '../components/layouts';
import { PaymentPage } from '../views';

const ShoppingRouter = () => {
    return (
        <ShoppingLayout>
            <Switch>
                <Route exact path='/buy' component={PaymentPage}/>
                <Redirect from="*" to="/404" />
            </Switch>
        </ShoppingLayout>
    )
}

export default ShoppingRouter
