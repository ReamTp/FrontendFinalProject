import { HTMLInputTypeAttribute } from "react"
import { IconType } from "react-icons/lib"
import { ChildrenType } from "../global/const"

export type DefaultContentProps = {
    children: ChildrenType
}

export type ButtonProps = {
    success?: any,
    warning?: any,
    danger?: any,
}

export type AppNameProps = {
    size?: Number | any,
}

export type InputProps = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
}

export type ImageCircleProps = {
    image: IconType | string,
    size?: number,
}