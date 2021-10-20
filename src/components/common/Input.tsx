import { InputProps } from "../../types/components/common";

const Input = (props: InputProps) => {
    return (
        <input type={props.type ? props.type : "text"}/>
    )
}

export default Input;