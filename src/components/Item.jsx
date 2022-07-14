import React from 'react'
import ItemCount from './ItemCount'

const Item = ({info}) => {
    return (
        <>
            <div className='divItem'>
                <h3>{info.name}</h3>
                <img src={info.image} className="img" alt="" />
                <div className='divItem-Count'>
                    <h5>{info.description}</h5>
                    <ItemCount stock={info.stock}/>
                </div>
            </div>
        </>
    )
}

export default Item