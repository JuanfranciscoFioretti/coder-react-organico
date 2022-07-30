import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'


function Product(props) {
    return (
        <>
            <div className='divProduct'>
                <div className='productImage imgDetail'>
                    <img src={props.thumbnail}></img>
                </div>
                <div className='productInfo'>
                    <h3>{props.title}</h3>
                    <h5>{props.description}</h5>
                    <p>Price: ${props.price}</p>
                </div>
                <ItemCount 
                initial={1}
                stock={20}
                />
            </div>
        </>
    )
}

export default Product








// import { products } from '../containers/ItemDetailContainer';
// import React, { useState } from 'react';
// export const CartContext = React.createContext([]);


// const CartProvider = ({children}) => {

//     const [cart, setCart] = useState([]);

//     // BORRAR CARRITO
//     const clearCart = () => setCart([]);

//     // SABER SI ESTÁ EL PRODUCTO
//     const isInCart = (id) => {
//         return cart.find(product => product.id === id) ? true : false;
//     } 
    
//     // REMOVER DEL CARRITO
//     const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

//     // // AGREGAR AL CARRITO
//     // const addProduct = (item, quantity) => {
//     //     let newCart;
//     //     let product = cart.find(product => product.id === item.id);
//     //     if (product) {
//     //         product.quantity += quantity;
//     //         newCart = [...cart];
//     //     } else {
//     //         product = {...item, quantity: quantity};
//     //         newCart = [...cart, product];
//     //     }
//     //     setCart(newCart);
//     // }

//     const addProduct = (product, quantity) => {
//         if (isInCart(product.id)) {
//             setCart(cart.map(product => {
//                 return product.id === product.id ? { ...product, quantity: product.quantity + quantity } : product
//             }));
//         } else {
//             setCart([ ...cart, { ...product, quantity}]);
//         }
//     }



//     return (
//             <CartContext.Provider value={{
//                 clearCart,
//                 isInCart,
//                 removeProduct,
//                 addProduct
//             }}>
//                 {children}
//             </CartContext.Provider>
//     )
// }

// export default CartProvider