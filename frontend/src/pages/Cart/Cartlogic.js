// CartLogic.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingIndex].amount !== undefined) {
          updatedCart[existingIndex].amount += 1;
        } else {
          updatedCart[existingIndex].amount = 1;
        }
        return updatedCart;
      }
      return [...prevCart, { ...item, amount: 1 }];
    });
  };


  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };
  
  const updateQuantity = (index, newQuantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newQuantity <= 0) {
        // If the new quantity is less than or equal to 0, remove the item from the cart
        newCart.splice(index, 1);
      } else {
        // Otherwise, update the quantity of the item
        newCart[index] = { ...newCart[index], amount: newQuantity };
      }
      return newCart;
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
