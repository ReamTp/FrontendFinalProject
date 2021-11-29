import { Product, ShoppingCar } from "../../interfaces";

type ShoppingCarAction =
    | { type: "addProduct"; product: Product }
    | { type: "removeProduct"; product: { id: number } }
    | { type: "removeAll"}
    | { type: "toggleProduct"; product: { id: number } };

const ShoppingCarReducer = (state: ShoppingCar, action: ShoppingCarAction) : ShoppingCar => {
    switch (action.type) {
        case "addProduct":
            state.productCount = state.productCount + action.product.cantidad;
            let found = false;

            const object = state.products.map(({...product}) => {
                if (product.id === action.product.id) {
                    found = true;
                    if (product.cantidad < 50) {
                        product.cantidad = product.cantidad + action.product.cantidad;
                    }
                }

                return product;
            })

            const addProduct = {
                ...state,
                products: !found ? [...state.products, action.product] : object,
                totalPrice: state.totalPrice + (action.product.price * action.product.cantidad)
            }

            localStorage.setItem('productsList', JSON.stringify(addProduct.products));

            return addProduct;
        case "removeProduct":
            let removedCant = 0;
            let removedPrice = 0;

            const removeState = {
                ...state,
                products: state.products.filter(product => {
                    if (product.id === action.product.id) {
                        removedCant = product.cantidad;
                        removedPrice = product.price;
                        state.productCount = state.productCount > 0 ? state.productCount - product.cantidad : 0;
                    }

                    return product.id !== action.product.id
                }),
                totalPrice: state.totalPrice - (removedPrice * removedCant),
            }

            localStorage.setItem('productsList', JSON.stringify(removeState.products));

            return removeState;
        case "removeAll":
            const removedAll = {
                productCount: 0,
                products: [],
                totalPrice: 0
            }

            localStorage.setItem('productsList', JSON.stringify(removedAll.products));

            return removedAll;
        case 'toggleProduct':
            let price = 0;

            const toggleState = {
                ...state,
                products: state.products.map(({...product}) => {
                    if ((product.id === action.product.id) && (product.cantidad < 50)) {
                        product.cantidad++;
                        price = product.price;
                    }

                    return product;
                }),
                totalPrice: state.totalPrice + price
            }

            localStorage.setItem('productsList', JSON.stringify(toggleState.products));
            return toggleState;
        default:
            return state;
    }
}

export default ShoppingCarReducer;