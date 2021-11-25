import { Category } from ".";

export default interface Product {
    id: number;
    name: string;
    price: number;
    cantidad: number;
}


export interface ProductReact {
    id: number;
    name: string;
    detail: string;
    price: number;
    category: Category;
    state: boolean;
}