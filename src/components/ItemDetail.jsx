import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
    return (
        <>
            <div className='divAllData'>
                <div className='divImg'>
                    <img src={data.image} className='imgDetail' alt=''/>
                </div>
                <div className='divSmallData'>
                    <h2 className='h2Description'>{data.name}</h2>
                    <h3 className='h3Description'>{data.description}</h3>
                    <div className='divBigDescription'>
                        <p>{data.bigDescription}</p>
                    </div>
                    <div className='divPrice'>
                        <h5>Price: ${data.price}</h5>
                        <h6 className='h6ItemDetail'>{data.discount} OFF</h6>
                    </div>
                    <p className='pMediosDePago'>Ver medios de pago</p>
                    <h6>Stock: {data.stock} units</h6>
                    <div className='divItemCountDetail'>
                        <ItemCount className='DetailItemCount' stock={data.stock}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail