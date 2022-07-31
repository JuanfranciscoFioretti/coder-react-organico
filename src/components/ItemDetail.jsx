import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PuffLoader from "react-spinners/PuffLoader";

import ItemCount from './ItemCount'

import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from './CartContext';



const ItemDetail = ({product}) => {
    const [goToCart, setGoToCart] = useState(false);

    const [loading, setLoading] = useState(false);

    const context = useContext(CartContext)
    
    const onAdd = (quantity) => {
        setGoToCart(true);
        // setGoToCart(quantity)
        context.addToCart(product, quantity)
    }
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>

            {
                loading ?

                <PuffLoader 
                    className='loaderItemList'
                    color={"#77C789"} 
                    loading={loading} 
                    size={60} 
                />

                :
                <div className='divAllData'>
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
                            
                                {
                                    goToCart 
                                    ? <Link to='/cart'><h5 className='linkGoToCart'>Go to cart</h5></Link>
                                    : <ItemCount className='detailItemCount' stock={product.stock} onAdd={onAdd}/>
                                }
                            
                            
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetail