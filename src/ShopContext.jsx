import { createContext, useState } from 'react';
import {data} from './data';
export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < data.length +1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = data.find((item)=> item.id === Number(itemId));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmount}


    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}


    export  default ShopContextProvider;