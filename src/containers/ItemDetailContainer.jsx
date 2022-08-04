import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        // // (NOTA: HACERLO DE ESTA FORMA ES == QUE )
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
        // ......
        // // ( ESTA FORMA )
        // getDoc(doc(getFirestore(), 'products', id)).then(res => console.log(res))


    }, [id]);
    return (
        <>
            <ItemDetail product={data}/>
        </>
    )
}

export default ItemDetailContainer