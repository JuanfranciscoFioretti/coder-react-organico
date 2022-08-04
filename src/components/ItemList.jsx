import React, { useState, useEffect } from 'react'
import Item from './Item'
import '../App.css';
import PuffLoader from "react-spinners/PuffLoader";


const ItemList = ({data = []}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
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

                <div className='divItemList'>
                    {
                    data.map(card =>
                        <Item
                            key={card.id} 
                            stock={card.stock} 
                            info={card}
                        />)
                    }
                </div>
            }
        </>
    );
}

export default ItemList