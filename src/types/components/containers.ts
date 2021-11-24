import { Product } from "../../interfaces"

export type ModalProps = {
    open: Boolean;
    isOpen: () => void;
}

export type ProductModalProps = ModalProps & {
    id: number;
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
    products?: Product[];
    total?: number;
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
    product: Product;
    openModal: () => void;
}

export type AccessFormsProps = {
    width: number;
    move?: boolean;
    setMove?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DeliveryAddressProps = {
    direction: string;
}

export type ProductsToPayProps = {
    products: Array<any>;
}

export type PaymentResumeProps = {
    totalProducts: number;
}