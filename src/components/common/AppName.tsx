import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppNameProps } from "../../types/components/common";

const AppNameStyle = styled.h1`
    font-size: ${(props: AppNameProps) => props.size ? props.size : 32}px;
    color: ${({theme}) => theme.appName};
    font-family: 'Merienda', cursive;
    transition: all 0.15s linear;

    &:hover {
        transform: scale(1.015);
    }
`;

const AppName = () => {
    return (
        <Link to='/'>
            <AppNameStyle>La Consegna</AppNameStyle>
        </Link>
    )
}

export default AppName;