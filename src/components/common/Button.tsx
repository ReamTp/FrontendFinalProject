import styled from 'styled-components'
import { ButtonProps } from '../../types/components/common'

export const Button = styled.button`
    display: block;
    font-weight: 400;
    color: ${(props: ButtonProps) => props.warning ? "#000": "#fff"};
    text-align: center;
    user-select: none;
    background-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.success: props.warning ? ({theme}) => theme.warning : props.danger ? ({theme}) => theme.danger : ({theme}) => theme.info};
    border: none;
    padding: 0.375rem 0.75rem;
    border-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.success: props.warning ? ({theme}) => theme.warning : props.danger ? ({theme}) => theme.danger : ({theme}) => theme.info};
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:focus, &:hover {
        cursor: pointer;
        color: ${(props: ButtonProps) => props.success ? "#FFF": props.warning ? "#000" : ""};
        background-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.successHover : props.warning ? ({theme}) => theme.warningHover : props.danger ? ({theme}) => theme.dangerHover : ({theme}) => theme.infoHover};
        border-color: ${(props: ButtonProps) => props.success ? ({theme}) => theme.successHover : props.warning ? ({theme}) => theme.warningHover : props.danger ? ({theme}) => theme.dangerHover : ({theme}) => theme.infoHover};
        text-decoration: none;
    }
`;