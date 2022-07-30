import React, { useContext } from 'react'
import { CartContext } from './CartContext'


const Cart = () => {
    const context = useContext(CartContext)
    console.log(context.cartList);

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
            
        </>
    )
}

export default Cart