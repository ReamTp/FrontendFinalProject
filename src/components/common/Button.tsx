import styled from 'styled-components'
import { ButtonProps } from '../../types/components/common'

export const Button = styled.button`
    display: block;
    font-weight: 400;
    color: ${(props: ButtonProps) => props.warning ? "#000": props.transparent ? ({theme}) => theme.text : props.custom?.color ? props.custom.color : "#fff"};
    text-align: center;
    user-select: none;
    background-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.success: props.warning ? ({theme}) => theme.warning : props.danger ? ({theme}) => theme.danger : props.transparent ? 'transparent' : props.custom?.background ? props.custom.background : ({theme}) => theme.info};
    border: none;
    padding: 0.375rem 0.75rem;
    border-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.success: props.warning ? ({theme}) => theme.warning : props.danger ? ({theme}) => theme.danger : props.transparent ? 'transparent' : props.custom?.border ? props.custom.border : ({theme}) => theme.info};
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;

    svg {
        fill: ${(props: ButtonProps) => props.warning ? "#000": props.transparent ? ({theme}) => theme.text : props.custom?.color ? props.custom.color : "#fff"};
    }

    &:focus, &:hover {
        cursor: pointer;
        color: ${(props: ButtonProps) => props.warning ? "#1b1b1b" : props.transparent ? ({theme}) => theme.textHover : props.custom?.colorHover ? props.custom.colorHover : "#bdbdbd"};
        background-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.successHover : props.warning ? ({theme}) => theme.warningHover : props.danger ? ({theme}) => theme.dangerHover : props.transparent ? 'transparent' : props.custom?.backgroundHover ? props.custom.backgroundHover : ({theme}) => theme.infoHover};
        border-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.successHover : props.warning ? ({theme}) => theme.warningHover : props.danger ? ({theme}) => theme.dangerHover : props.custom?.borderHover ? props.custom.borderHover : ({theme}) => theme.infoHover};
        text-decoration: none;

        svg {
            fill: ${(props: ButtonProps) => props.warning ? "#1b1b1b": props.transparent ? ({theme}) => theme.textHover : props.custom?.colorHover ? props.custom.colorHover : "#bdbdbd"};
        }
    }

    &:active {
        transform: scale(${(props: ButtonProps) => props.transparent ? '0.85' : '0.95'});
    }
`;

export default Button;