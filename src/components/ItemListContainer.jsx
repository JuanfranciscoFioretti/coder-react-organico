import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
// import ItemCount from './ItemCount';


const products = [
    {
        name: "Irish Green Tea",
        id: 107,
        stock: 50,
        price: 570,
        description: "The best green tea",
        image: "https://www.magicalflavour.com/wp-content/uploads/2021/03/green-tea-1574c69.jpg"
    },
    {
        name: "Natural Grain",
        id: 90,
        stock: 100,
        price: 1300,
        description: "Almonds and walnuts",
        image: "https://deliciaskitchen.com/wp-content/uploads/2021/02/granola-de-lavanda-y-limon.jpg"
    },
    {
        name: "Strawberries",
        id: 72,
        stock: 80,
        price: 970,
        description: "The best strawberries",
        image: "https://agrosanpedro.cl/wp-content/uploads/2020/10/CONGELADAS-1024x609.jpg"
    },
    {
        name: "Nuts",
        id: 122,
        stock: 100,
        price: 500,
        description: "Almonds and walnuts",
        image: "https://images.ecestaticos.com/usFSSFoyYWFu8hh9GCe-lYa085Q=/117x0:1999x1411/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Faa8%2F26e%2F5f1%2Faa826e5f1d9b1c2efa3faf8b58688558.jpg"
    },
    {
        name: "Nutritive Flour",
        id: 43,
        stock: 30,
        price: 430,
        description: "Wholemeal flour",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/097/859/products/harina1-ded4db045a1f29089715122022465961-1024-1024.jpg"
    },

]



const ItemListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 3500);
        })
        getData.then(res => setData(res))

    }, [])
    return (
    // <div id='divItemList'>1</div>
        <>
            <div id='divItemList'>1</div>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;