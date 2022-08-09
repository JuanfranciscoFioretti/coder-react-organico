import React, { useContext } from 'react'
import { CartContext, useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';



const Cart = () => {
    const context = useContext(CartContext)
    console.log(context.cartList);

    const { cartList, totalPrice, totalProducts } = useCartContext();

    const order = {
        buyer:{
            name: "Bernardo Rodriguez",
            email: "bernardo@gmail.com",
            phone: 245265456,
            address: "Av 15, 1654"
        },
        items: cartList.map (product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity})),
        total: totalPrice(),
    }

    const finishBuy = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    return (
        <>  
            <div className='divCartTitle'>
                <div className='divBtnRemoveAll'>
                <h1>Cart</h1>
                <button className='btn btn-outline-danger' id='btnRemoveAll' onClick={context.clearAll}>Remove All</button>
                </div>
            </div>
            {
                context.cartList.length > 0 && context.cartList.map(product => (

                    <div className='divAllData' key={product.id}>
                    <div className='divImg'>
                        <img src={product.image} className='imgDetail'/>
                    </div>
                    <div className='divSmallData'>
                        <h2 className='h2Description'>{product.name}</h2>
                        <h3 className='h3Description'>{product.description}</h3>
                        <div className='divBigDescription'>
                            <p>{product.bigDescription}</p>
                        </div>
                        <div className='divPrice'>
                            <h4>Price: ${product.price}</h4>
                            <h6 className='h6ItemDetail'>{product.discount}% OFF</h6>
                        </div>
                        <p className='pMediosDePago'>Ver medios de pago</p>
                        <h5>Stock: {product.stock} units</h5>
                        <div className='divItemCountDetail'>
                            <button className='btn btn-outline-success btnCartRemove' onClick={() => { context.removeProduct(product.id)}}>Remove product</button>
                        </div>
                    </div>
                </div>
                ))
            }
            {
                context.cartList.length === 0 ?

                <div id='divCartEmpty'>
                    <div id='divCartEmptyTitle'>
                        <h4 id='h4Empty'>Oh, no! Your cart is empty!</h4>
                        <Link to='/'><button className='btn btn-outline-success'>Go back to home</button></Link>
                        
                    </div>
                    <div>
                        <img src="https://vtcllp.com/images/ecommimg/empty-cart.png" alt="" />
                    </div>
                </div>

                :
                <div className='divTotalProducts'>
                    <div className='divTotalProducts2'>
                        <h4 className='TotalProductsH4'>You have {totalProducts()} products</h4>
                        <hr />
                        <h4 className='TotalProductsH4'>Your total is ${totalPrice()}</h4>
                        <button onClick={finishBuy} className='btn btn-outline-success' id='btnFinish'>Finish your purchase</button>
                    </div>
                </div>

            }
            
        </>
    )
}

export default Cart