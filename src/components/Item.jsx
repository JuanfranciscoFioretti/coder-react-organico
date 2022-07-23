import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemDetailButton from './ItemDetailButton'

const Item = ({info}) => {
    return (
        <>
            <div className='divItem'>
                <h3 className='h3Item'>{info.name}</h3>
                <img src={info.image} className="imgProduct" alt="" />
                <div className='divItem-Count'>
                    <h5 className='h5Item'>{info.description}</h5>
                    <h4>Price : ${info.price}</h4>
                    <div className='container containerItemButtons'>
                        <div className='col-md-11'>
                            <div className='itemCountHeight' >
                                <ItemCount stock={info.stock}/>
                            </div>
                        </div>
                        <div className='col-md-1'>
                            <div className='itemDetailPos'>
                                <Link to={`/item/${info.id}`}><ItemDetailButton/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item