import { useReducer } from "react";
import { DefaultContentProps } from "../types/components/common";
import { ShoppingCarContext } from "../contexts";
import { Product, ShoppingCar } from "../interfaces";
import { ShoppingCarReducer } from "./reducers";

const initialState = (): ShoppingCar => {
    const list = localStorage.getItem('productsList');

    const productsList: Product[] = JSON.parse(list ? list : '[]');
    const count = productsList.length;

    const total = productsList.reduce((acc, product) => acc + (product.price * product.cantidad), 0)

    return {
        productCount: count,
        products: productsList,
        totalPrice: total
    }
}

const ShoppingCarProvider = ({children}: DefaultContentProps) => {
    const [shoppingCarState, dispatch] = useReducer(ShoppingCarReducer, initialState());

    const addProduct = (product: Product) => {
        dispatch({type: 'addProduct', product: product});
    }

    const toggleShooppingCar = (id: number) => {
        dispatch({type: 'toggleProduct', product: { id: id }});
    }

    const removeShooppingCar = (id: number) => {
        dispatch({type: 'removeProduct', product: { id: id }});
    }

    const removeAllShoppingCar = () => {
        dispatch({type: 'removeAll'});
    }

    return (
        <ShoppingCarContext.Provider value={{
            shoppingCarState,
            addProduct,
            toggleShooppingCar,
            removeShooppingCar,
            removeAllShoppingCar
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}

export default ShoppingCarProvider;
