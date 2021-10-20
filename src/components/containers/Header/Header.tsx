import Container from '../../common/Containers';
import AppName from '../../common/AppName';
import { HeaderContainer, Seeker, Switch } from './Header.elements';
import { ThemeHookProps } from '../../../types/global/theme';

const Header = (props: ThemeHookProps) => {
    return (
        <HeaderContainer>
            <Container>
                <div>
                    <Switch theme={props.theme} setTheme={props.setTheme} />
                </div>
                <div className="appName">
                    <AppName />
                </div>
                <Seeker/>
            </Container>
        </HeaderContainer>
    )
}


export default Header;