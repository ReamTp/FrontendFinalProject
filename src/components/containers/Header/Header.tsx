import { Container, AppName } from '../../common';
import { HeaderContainer, Seeker, Switch } from './Header.elements';
import { ThemeHookProps } from '../../../types/global/theme';
import { FcMenu } from "react-icons/fc";
import ShoppingCar from './ShoppingCar';
import LateralMenu from './LateralMenu';
import useLateralBars from '../../../hooks/useLateralBars';

const Header = (props: ThemeHookProps) => {
    const [open, isOpen] = useLateralBars();
    const [openLM, isOpenLM] = useLateralBars();

    return (
        <HeaderContainer>
            <Container>
                <div className="icons">
                    <FcMenu className={openLM ? 'active' : ''} onClick={() => isOpenLM()} />
                    <Switch theme={props.theme} setTheme={props.setTheme} />
                </div>
                <div className="appName">
                    <AppName />
                </div>
                <Seeker openShoppingCar={isOpen}/>
            </Container>
            <LateralMenu open={openLM} isOpen={isOpenLM}/>
            <ShoppingCar open={open} isOpen={isOpen}/>
        </HeaderContainer>
    )
}


export default Header;