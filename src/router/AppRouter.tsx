import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeHookProps } from '../types/global/theme';
import RouterWithNavBar from './RouterWithNavBar';

const AppRouter = (props: ThemeHookProps) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <RouterWithNavBar theme={props.theme} setTheme={props.setTheme} />
                </Route>
                <Redirect from="*" to="/404" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;