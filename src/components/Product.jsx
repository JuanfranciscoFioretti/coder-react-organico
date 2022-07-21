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