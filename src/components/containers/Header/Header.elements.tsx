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
    z-index: 100000;
    top: 0;

    & ~ ${ViewContainer} {
        margin-top: 80px;
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

export const Seeker = (props: SeekerProps) => {
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
                <Link to="/access">Ingresar</Link>
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