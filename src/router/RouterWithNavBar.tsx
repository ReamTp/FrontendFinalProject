import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { ThemeHookProps } from '../types/global/theme';
import { AccountPage, HomePage, ListPage } from '../views';

const RouterWithNavBar = (props: ThemeHookProps) => {
    return (
        <MainLayout hookTheme={{theme: props.theme, setTheme: props.setTheme}}>
            <Switch>
                <Route path="/account" component={AccountPage}/>
                <Route exact path="/products/category/:id-:name" component={ListPage}/>
                <Route exact path="/products" component={ListPage}/>
                <Route exact path="/" component={HomePage}/>
                <Redirect from="*" to="/404" />
            </Switch>
        </MainLayout>
    )
}

export default RouterWithNavBar
