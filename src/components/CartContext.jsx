import React, { useState, createContext } from 'react';
import { useContext } from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    // const [ quantity, setQuantity ] = useState([]);


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

    
    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
        console.log(totalPrice);
    };
    
    // const totalProducts = () => {
    //     cartList.reduce(
    //         (acc, actualProduct) => acc + actualProduct.quantity, 0,);
    //     }

    const totalProducts = () => {
        let quantity = cartList.map(products => products.quantity);
        return quantity.reduce(((previusValue, currentValue) => previusValue + currentValue), 0)
        console.log(totalProducts());
    }
        
    const cartNotification = () => {
        let cantidadBadge = cartList.map(product => product.quantity);
        return cantidadBadge.reduce(((previusValue, currentValue) => previusValue + currentValue), 0) 
    }
        
    const clearAll = () => {
        setCartList([]);
    }
                
        return (
            <CartContext.Provider value={{cartList, addToCart, isInCart, removeProduct, clearAll, totalPrice, totalProducts, cartNotification }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider