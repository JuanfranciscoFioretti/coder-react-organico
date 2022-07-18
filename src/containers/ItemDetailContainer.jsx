import React, {useState, useEffect} from 'react'
import ItemDetail from '../components/ItemDetail';


const products = [
    {
        name: "Irish Green Tea",
        id: 107,
        stock: 50,
        price: 570,
        discount: "15%",
        description: "The best green tea",
        bigDescription: 'lorem impusm que se yo que mas iba no me deja ponerlo',
        image: "https://www.magicalflavour.com/wp-content/uploads/2021/03/green-tea-1574c69.jpg"
    },
    {
        name: "Natural Grain",
        id: 90,
        stock: 100,
        price: 1300,
        discount: "15%",
        description: "Almonds and walnuts",
        bigDescription: 'lorem impusm que se yo que mas iba no me deja ponerlo',
        image: "https://deliciaskitchen.com/wp-content/uploads/2021/02/granola-de-lavanda-y-limon.jpg"
    },
    {
        name: "Strawberries",
        id: 72,
        stock: 80,
        price: 970,
        discount: "15%",
        description: "The best strawberries",
        bigDescription: 'lorem impusm que se yo que mas iba no me deja ponerlo',
        image: "https://agrosanpedro.cl/wp-content/uploads/2020/10/CONGELADAS-1024x609.jpg"
    },
    {
        name: "Nuts",
        id: 122,
        stock: 100,
        price: 500,
        discount: "15%",
        description: "Almonds and walnuts",
        bigDescription: 'lorem impusm que se yo que mas iba no me deja ponerlo',
        image: "https://images.ecestaticos.com/usFSSFoyYWFu8hh9GCe-lYa085Q=/117x0:1999x1411/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Faa8%2F26e%2F5f1%2Faa826e5f1d9b1c2efa3faf8b58688558.jpg"
    },
    {
        name: "Nutritive Flour",
        id: 43,
        stock: 30,
        price: 430,
        discount: "15%",
        description: "Wholemeal flour",
        bigDescription: 'lorem impusm que se yo que mas iba no me deja ponerlo',
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/097/859/products/harina1-ded4db045a1f29089715122022465961-1024-1024.jpg"
    },

]




const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products[3])
            }, 3500);
        })
        getData.then(resolve => setData(resolve))
    }, [])

    return (
        <>
            <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer