import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PuffLoader from "react-spinners/PuffLoader";
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {

    const [loading, setLoading] = useState(false);

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
                            <h5>Price: ${product.price}</h5>
                            <h6 className='h6ItemDetail'>{product.discount} OFF</h6>
                        </div>
                        <p className='pMediosDePago'>Ver medios de pago</p>
                        <h6>Stock: {product.stock} units</h6>
                        <div className='divItemCountDetail'>
                            <ItemCount className='detailItemCount' stock={product.stock}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetail