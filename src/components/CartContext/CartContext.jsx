import { useLocalStorage } from "@hooks/hooks";
import React, { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemCart, setItemCart] = useLocalStorage("cart");

  const addCart = (product) => {
    if (!product.id || !product.size) {
      alert("Product ID and size are required to add to cart.");
      return;
    } else {
      setItemCart((cartBefore) => {
        const productExist = cartBefore.findIndex(
          (article) =>
            article.id === product.id && article.size === product.size
        );
        if (productExist >= 0) {
          const cartAct = [...cartBefore];
          cartAct[productExist].quantity += 1;
          return cartAct;
        } else {
          return [...cartBefore, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const incrementCart = (productId, productSize) => {
    setItemCart((cart) =>
      cart.map((item) =>
        item.id === productId && item.size === productSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementCart = (productId, productSize) => {
    setItemCart((cart) =>
      cart.map((item) => {
        if (item.id === productId && item.size === productSize) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId, productSize) => {
    setItemCart((cart) =>
      cart.filter(
        (item) => !(item.id === productId && item.size === productSize)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        itemCart,
        addCart,
        removeFromCart,
        decrementCart,
        incrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
