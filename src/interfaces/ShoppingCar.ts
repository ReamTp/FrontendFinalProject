import { Product } from ".";

export default interface ShoppingCar {
    productCount: number;
    products: Product[];
    totalPrice: number;
}