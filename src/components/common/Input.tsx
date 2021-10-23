import styled from "styled-components";
import { InputProps } from "../../types/components/common";

const InputStyle = styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.tertiaryColor};
    background-clip: padding-box;
    border: 1px solid ${({theme}) => theme.border};
    border-radius: .25rem;
    outline: 0 none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:focus {
        color: ${({theme}) => theme.textHover};
        border-color: ${({theme}) => theme.borderHover};
        outline: 0;
        box-shadow: 0 0 0 0.1rem ${({theme}) => theme.shadowColor};
    }
`;

const Input = (props: InputProps) => {
    return (
        <InputStyle type={props.type ? props.type : "text"} placeholder={props.placeholder ? props.placeholder : ''}/>
    )
}

export default Input;