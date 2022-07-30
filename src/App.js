import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

// import CartProvider from './context/CartContext';


function App() {

  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/item/:id' element={<ItemDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      
    </div>
  );
}

export default App;
