import { Switch, Route } from 'react-router-dom';
import Container from '../components/common/Containers';
import MainLayout from '../components/layouts/MainLayout';
import { ThemeHookProps } from '../types/global/theme';

const RouterWithNavBar = (props: ThemeHookProps) => {
    return (
        <MainLayout hookTheme={{theme: props.theme, setTheme: props.setTheme}}>
            <Switch>
                <Route exact path="/">
                    <Container>
                        <h1>Hola</h1>
                    </Container>
                </Route>
            </Switch>
        </MainLayout>
    )
}

export default RouterWithNavBar
