import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ShoppingCarProvider, UserProvider } from '../providers';
import { ThemeHookProps } from '../types/global/theme';
import { LoginPage, Page404 } from '../views';
import RouterWithNavBar from './RouterWithNavBar';
import ShoppingRouter from './ShoppingRouter';

const AppRouter = (props: ThemeHookProps) => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/404" component={Page404} />
                    <ShoppingCarProvider>
                        <Switch>
                            <Route path="/access" component={LoginPage} />
                            <Route path="/buy" component={ShoppingRouter}/>
                            <Route path="/">
                                <RouterWithNavBar theme={props.theme} setTheme={props.setTheme} />
                            </Route>
                        </Switch>
                    </ShoppingCarProvider>
                    <Redirect from="*" to="/404" />
                </Switch>
            </BrowserRouter>
        </UserProvider>
    )
}

export default AppRouter;