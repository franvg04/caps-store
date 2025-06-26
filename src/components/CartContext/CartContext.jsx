import React, { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider ({children}) {
    const [itemCart, setItemCart] = useState([]);

    const addCart = (product) => {
        setItemCart((cartBefore) => {
            const productExist = cartBefore.findIndex (
                (article) => article.id === product.id
            );
            if (productExist >= 0) {
                const cartAct = [...cartBefore];
                cartAct[productExist].quantity += 1;
                return cartAct;
            } else {
                return [...cartBefore, {...product, quantity: 1}]
            }
        })
    }

    return (
        <CartContext.Provider value={{itemCart, addCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);