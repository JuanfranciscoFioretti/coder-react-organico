import React, {useState} from 'react'

function ItemCount({stock, onAdd}) {
    const [quantity, setQuantity] = useState(1);

    // const [goToCart, setGoToCart] = useState(false);

    const sumaQuantity = () => {
        if (quantity < stock) {
            const moreQuantity = quantity + 1
            setQuantity(moreQuantity)
        } 
        else {
            alert ("The limit stock has been surpased")
        }
    }

    const restaQuantity = () => {
        if (((quantity < stock) || (quantity >= 2)) && (quantity != 1)) {
            const minusQuantity = quantity - 1
        setQuantity(minusQuantity)
        } else {
            alert ("Can´t take more products off the cart")
        }
    }

    const addProduct = () => {
        alert("Item has been added to the cart")
    }

    // const onAdd = (quantity) => {
    //     setGoToCart(true);
    // }

    return (
        <>
            <div id='divAllButtons'>
                <div id='divAllButtons-2'>
                    <div id='divQuantityBotones'>
                        <button className='btn btn-outline-primary' onClick={restaQuantity}>-</button><div id='divQuantity'>{quantity}</div><button className='btn btn-outline-primary' onClick={sumaQuantity}>+</button>
                    </div>
                    <div id='divChart'>
                        <button className='btn btn-outline-secondary' onClick={onAdd}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount