import React, { useState, createContext } from 'react';
import Cart from './Cart';
import ItemCount from './ItemCount';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // const addToCart = (product, quantity) => {
    //     let foundProduct = cartList.find(product => product.id === product.id);
    //     // if (foundProduct === undefined) {
    //         setCartList([...cartList, product])
    //     // } else { (foundProduct.id.quantity += quantity)
    //         // setCartList([...cartList, product])
        
    // }

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            setCartList(cartList.map(product => {
                return product.id === product.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCartList([...cartList, {...product, quantity}]);
        }
    }

    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => {
        let newState = cartList.filter(product => product.id != id)
        setCartList(newState)
    }

    const clearAll = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, isInCart, removeProduct, clearAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider