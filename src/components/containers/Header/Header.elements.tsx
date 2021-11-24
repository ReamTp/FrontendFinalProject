import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi';
import { BsCart2, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { SearchBtn, SeekerStyles } from './styles/Seeker.styles';
import { Button, Container, Input, ViewContainer } from '../../common';
import { Link } from 'react-router-dom';
import { SwitchContainer } from './styles/Switch.styles';
import { ThemeHookProps } from '../../../types/global/theme';
import { ShoppingCarContainer } from './ShoppingCar/ShoppingCar.elements';
import { SeekerProps } from '../../../types/components/containers';
import { LateralMenuContainer } from './LateralMenu/LateralMenu.elements';
import { DefaultContentProps } from '../../../types/components/common';
import { useContext } from 'react';
import { UserContext } from '../../../contexts';

// Background
export const BackgroundActionsHeader = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.blackTransparent};
    transition: all 0.25s ease-in-out;
    display: none;

    &.open {
        display: inline;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.secondaryColor};
    height: 80px;
    box-shadow: -3px 0px 15px 0px ${({theme}) => theme.shadowColor};
    position: fixed;
    z-index: 1000;
    top: 0;

    & ~ ${ViewContainer} {
        margin-top: 80px;
        min-height: calc(100vh - (50px + 80px));
    }

    ${Container} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;

        .icons {
            display: flex;
            align-items: center;

            > svg {
                width: 35px;
                height: 35px;
                margin-right: 25px;
                transition: all 0.25s ease-in-out;

                &.active {
                    transform: rotate(180deg);
                }

                g {
                    fill: ${({theme}) => theme.text};
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .appName {
            text-align: center;
        }
    }

    ${BackgroundActionsHeader}, ${ShoppingCarContainer}{
        position: absolute;
        top: 80px;
        height: calc(100vh - 80px);
    }

    ${BackgroundActionsHeader}.lm {
        top: 0;
        height: 100vh;
    }

    ${ShoppingCarContainer} {
        position: absolute;
        right: 0;
        width: 376px;
    }

    ${LateralMenuContainer} {
        width: 376px;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100000;
    }
`;

const LoggedUserContent = styled.div`
    width: 45px;
    height: 45px;
    position: relative;

    > div {
        display: none;
        position: absolute;
        width: 150px;
        background-color: ${({theme}) => theme.primaryColor};
        right: 0;
        top: 45px;
        border-radius: 5px;
        -webkit-box-shadow: 3px 10px 20px -8px ${({theme}) => theme.shadowColor};
        -moz-box-shadow: 3px 10px 20px -8px ${({theme}) => theme.shadowColor};
        box-shadow: 3px 10px 20px -8px ${({theme}) => theme.shadowColor};

        &:hover {
            display: block;
        }

        > ul {
            width: 100%;

            > li {
                width: 100%;
                text-align: center;

                &:nth-of-type(1) {
                    padding-top: 10px;
                }

                &:nth-of-type(2n) {
                    padding-top: 5px;
                    padding-bottom: 5px;
                }

                > a {
                    color: ${({theme}) => theme.text} !important;

                    &:hover {
                        color: ${({theme}) => theme.textHover} !important;
                    }
                }

                > button {
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
`;

const LoggedUserContainer = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.title} !important;
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: scale(1.1);

        ~ div {
            display: block;
        }
    }
`;

const LoggedUser = ({children}: DefaultContentProps) => {
    const { logout } = useContext(UserContext);

    return(
        <LoggedUserContent>
            <LoggedUserContainer to="/account">{children}</LoggedUserContainer>

            <div>
                <ul>
                    <li>
                        <Link to="/account">Mi Cuenta</Link>
                    </li>
                    <li>
                        <Button onClick={() => logout()} transparent>Cerrar Sessión</Button>
                    </li>
                </ul>
            </div>
        </LoggedUserContent>
    )
}

export const Seeker = (props: SeekerProps) => {
    const { userState } = useContext(UserContext);

    return (
        <SeekerStyles>
            <div className="searchContent">
                <Input type="text" placeholder="Buscar..." />
                <SearchBtn>
                    <BiSearchAlt />
                </SearchBtn>
            </div>

            <div className="navItems">
                <Button onClick={() => props.openShoppingCar()} transparent>
                    <BsCart2/>
                </Button>

                {userState.token === "" ? <Link to="/access">Ingresar</Link> : <LoggedUser>{userState.abv}</LoggedUser>}
            </div>
        </SeekerStyles>
    )
}

export const Switch = ({theme, setTheme}: ThemeHookProps) => {
    return (
        <SwitchContainer>
            { theme === 'light' ? <BsToggleOff onClick={() => setTheme()}/> : theme === 'dark' && <BsToggleOn onClick={() => setTheme()}/> }
        </SwitchContainer>
    )
}