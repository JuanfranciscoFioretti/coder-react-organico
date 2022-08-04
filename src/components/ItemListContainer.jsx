import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';



const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    // useEffect(() => {

    //     const fireStoreFetch = async () => {
    //         const querySnapshot = await getDocs(collection(db, "products"));
    //         const dataFromFireStore = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }))
    //         return dataFromFireStore
            
    //     }
    //     fireStoreFetch()
    //     .then(result => setData(result))
    //     .catch(err => console.log(err))

    //     const querydb = getFirestore();
    //     const queryCollection = collection(querydb, 'products');
        
    // }, [id])

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (id) {
            const queryFilter = query(
                queryCollection,
                where('category', '==', id)
            );
            getDocs(queryFilter).then((res) => 
                setData (
                    res.docs.map((product) => ({
                        id: product.id,
                        ...product.data()
                    }))
                )
            );
        } else {
            getDocs(queryCollection)
                .then((res) => 
                    setData(
                        res.docs.map((product) => ({
                            id: product.id,
                            ...product.data()
                        }))
                    )
                )
            }
        }, [id])


    return (
        <>
            <div id='divItemList'>
                <ItemList data={data}/>
            </div>
        </>
    );
}

export default ItemListContainer;