import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Products from './containers/Products';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Products/>
    </div>
  );
}

export default App;
