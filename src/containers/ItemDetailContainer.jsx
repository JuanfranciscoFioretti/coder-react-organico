import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail';


const products = [
    {
        name: "Irish Green Tea",
        id: 107,
        stock: 50,
        price: 570,
        category: "Organic",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://thumbs.dreamstime.com/b/polvo-matcha-t%C3%A9-verde-en-taz%C3%B3n-con-hoja-aislada-blanco-sobre-fondo-174849687.jpg"
    },
    {
        name: "Natural Grain",
        id: 90,
        stock: 100,
        price: 1300,
        category: "Gluten-free",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://img.freepik.com/foto-gratis/granola-tazon-sobre-fondo-blanco-comida-sana-vista-lateral_538816-8.jpg"
    },
    {
        name: "Strawberries",
        id: 72,
        stock: 80,
        price: 970,
        category: "Organic",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://www.verduleriadonaamalia.cl/wp-content/uploads/2020/04/frutillas.jpg"
    },
    {
        name: "Nuts",
        id: 122,
        stock: 100,
        price: 500,
        category: "Vegan",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://thumbs.dreamstime.com/b/mezcla-de-frutos-secos-aislados-sobre-fondo-blanco-vista-superior-214104715.jpg"
    },
    {
        name: "Nutritive Flour",
        id: 43,
        stock: 30,
        price: 730,
        category: "Organic",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://st.depositphotos.com/2427951/4724/i/600/depositphotos_47243765-stock-photo-whole-wheat-flour.jpg"
    },
    {
        name: "Plants burguer",
        id: 49,
        stock: 30,
        price: 425,
        category: "Vegan",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://media.istockphoto.com/photos/vegan-burger-with-tofu-and-vegetables-isolated-on-white-background-picture-id1091013902?k=20&m=1091013902&s=170667a&w=0&h=EMR9Lies20fZ4cl7A3g4iewTkNF2fA4hVQ5R3xFFowU="
    },
    {
        name: "Vegan tofu",
        id: 23,
        stock: 30,
        price: 230,
        category: "Vegan",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://thumbs.dreamstime.com/b/trozos-de-delicioso-tofu-y-soja-sobre-fondo-blanco-214314727.jpg"
    },
    {
        name: "Gluten free bread",
        id: 21,
        stock: 30,
        price: 300,
        category: "Gluten-free",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRUtYWES_1qKEDzu2DVoi8Ou4vUNTemB5zQ&usqp=CAU"
    },
    {
        name: "Spinach discs",
        id: 12,
        stock: 30,
        price: 525,
        category: "Vegan",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://cdn.shopify.com/s/files/1/0581/7407/9167/products/WhatsAppImage2021-09-07at14.54.49_1_1500x.jpg?v=1631045962"
    },
    {
        name: "Almond milk",
        id: 69,
        stock: 30,
        price: 320,
        category: "Vegan",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://thumbs.dreamstime.com/b/vaso-de-leche-almendra-rodeado-almendras-aisladas-sobre-fondo-blanco-214384870.jpg"
    },
    {
        name: "Organic onion",
        id: 86,
        stock: 30,
        price: 120,
        category: "Organic",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://thumbs.dreamstime.com/b/cebolla-roja-y-rebanada-aisladas-en-el-fondo-blanco-con-acortar-p-94427096.jpg"
    },
    {
        name: "Chocolate cookies",
        id: 41,
        stock: 30,
        price: 278,
        category: "Gluten-free",
        description: "Lorem, ipsum dolor sit amet wfefwg consectetur amet consecteturamet consectetur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPiayS06_i3aCi1b9c27WCHYtIgM4d5RhasxX5UT0jQwojrOsYttZYXadbGPlB83O4nw&usqp=CAU"
    },


]




const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 3500);
        })
        getData.then(resolve => setData(resolve))
        // getData.then((response) => 
        //     setData(response.find((products) => products.id === id)))
    }, [id]);

    return (
        <>
            <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer