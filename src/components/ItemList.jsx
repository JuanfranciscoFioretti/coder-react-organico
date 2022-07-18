import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
    return (
        <>
            {
            data.map(card =>
                <Item 
                    key={card.id} 
                    stock={card.stock} 
                    info={card}
                />)
            }
            {/* <Item/> */}
        </>
    );
}

export default ItemList