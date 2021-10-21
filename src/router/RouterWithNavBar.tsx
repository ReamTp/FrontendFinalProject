import { Switch, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { ThemeHookProps } from '../types/global/theme';
import HomePage from '../views/HomePage';

const RouterWithNavBar = (props: ThemeHookProps) => {
    return (
        <MainLayout hookTheme={{theme: props.theme, setTheme: props.setTheme}}>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </MainLayout>
    )
}

export default RouterWithNavBar
