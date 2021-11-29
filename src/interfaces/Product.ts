import { Category } from ".";

export default interface Product {
    id: number;
    name: string;
    price: number;
    cantidad: number;
    image: string;
}


export interface ProductReact {
    id: number;
    name: string;
    detail: string;
    price: number;
    category: Category;
    state: boolean;
    image: string;
}

export interface ProductBallot {
    id: number;
    quantity: number;
}