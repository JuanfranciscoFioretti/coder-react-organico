import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
    return (
        <>
            <div className='divItemList'>
                {
                data.map(card =>
                    <Item
                        key={card.id} 
                        stock={card.stock} 
                        info={card}
                    />)
                }
                {/* <Item/> */}
            </div>
        </>
    );
}

export default ItemList