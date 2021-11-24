import { createContext } from "react";
import { Product, ShoppingCar } from "../interfaces";

type ShoppingCarContextProps = {
    shoppingCarState: ShoppingCar;
    addProduct: (product: Product) => void;
    toggleShooppingCar: (id: number) => void;
    removeShooppingCar: (id: number) => void;
    removeAllShoppingCar: () => void;
}

const ShoppingCarContext = createContext<ShoppingCarContextProps>({} as ShoppingCarContextProps);

export default ShoppingCarContext;
