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
    transparent?: any,
    custom?: {
        color?: string,
        colorHover?: string,
        background?: string,
        backgroundHover?: string,
        border?: string,
        borderHover?: string,
    }
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
    noHover?: any,
}

export type ImageCircleStyleProps = {
    size?: number,
    noHover?: any,
}