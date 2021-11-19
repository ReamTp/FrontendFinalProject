import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeHookProps } from '../types/global/theme';
import LoginPage from '../views/LoginPage';
import Page404 from '../views/Page404';
import RouterWithNavBar from './RouterWithNavBar';
import ShoppingRouter from './ShoppingRouter';

const AppRouter = (props: ThemeHookProps) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/404" component={Page404} />
                <Route path="/access" component={LoginPage} />
                <Route path="/buy">
                    <ShoppingRouter />
                </Route>
                <Route path="/">
                    <RouterWithNavBar theme={props.theme} setTheme={props.setTheme} />
                </Route>
                <Redirect from="*" to="/404" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;