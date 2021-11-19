import { ProductsType } from "../global/objects"

export type ModalProps = {
    id: Number;
    open: Boolean;
    isOpen: () => void;
    cant: number;
    addCant: () => void;
    removeCant: () => void;
}

export type SeekerProps = {
    openShoppingCar: () => void;
}

export type ActionsHeaderProps = {
    open: boolean;
    isOpen: () => void;
}

export type ShoppingCarProdutcsProps = {
    heigth: number;
    products?: Array<{}>;
}

export type ShoppingCarNoProdutcsProps = {
    heigth: number;
    openShoppingCar: () => void;
}

export type BannerProductsProps = {
    title: string;
}

export type ImgBannerProductsProps = {
    src: string;
}

export type PLProductProps = {
    img: string;
    product: ProductsType;
    openModal: () => void;
}

export type AccessFormsProps = {
    width: number;
    move?: boolean;
    setMove?: React.Dispatch<React.SetStateAction<boolean>>;
}