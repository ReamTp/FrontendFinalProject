import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi';
import { BsCart2, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { SearchBtn, SeekerStyles } from './StylesComponents/Seeker.styles';
import Container from '../../common/Containers';
import { Link } from 'react-router-dom';
import { SwitchContainer } from './StylesComponents/Switch.styles';
import { ThemeHookProps } from '../../../types/global/theme';
import Input from '../../common/Input';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.secondaryColor};
    height: 80px;
    box-shadow: -3px 0px 15px 0px ${({theme}) => theme.shadowColor};

    ${Container} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;

        .appName {
            text-align: center;
        }
    }
`;

export const Seeker = () => {
    return (
        <SeekerStyles>
            <div className="searchContent">
                <Input type="text" placeholder="Buscar..." />
                <SearchBtn>
                    <BiSearchAlt />
                </SearchBtn>
            </div>

            <div className="navItems">
                <Link to="/" >
                    <BsCart2/>
                </Link>
                <Link to="/">Ingresar</Link>
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