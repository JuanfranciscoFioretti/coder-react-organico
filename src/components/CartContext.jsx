import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (product) => {
        setCartList([...cartList, product])
    }

    const removeProduct = (id) => {
        let newState = cartList.filter(product => product.id != id)
        setCartList(newState)
    }

    const clearAll = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeProduct, clearAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider