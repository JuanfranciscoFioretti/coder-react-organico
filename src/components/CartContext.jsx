import React, { useState, createContext } from 'react';
import { useContext } from 'react';
// import Cart from './Cart';
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

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

    
    // const productTotalPrice = () => { 
    //     const compraTotal = cartList.reduce((acc, products) => (acc + products.price * products.quantity), 0)      
    //     return compraTotal;    
    // }

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalProducts = () => {
        cartList.reduce(
            (acc, actualProduct) => acc + actualProduct.quantity, 0,
        );
    }
    
    const cartNotification = () => {
        let cantidadBadge = cartList.map(products => products.quantity);
        return cantidadBadge.reduce(((previusValue, currentValue) => previusValue + currentValue), 0) 
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, isInCart, removeProduct, clearAll, totalPrice, totalProducts, cartNotification }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider