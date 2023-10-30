import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CarritoProvider } from './Context/ContextCar';
import HyFJoubert from './components/HyFJoubert/HyFJoubert';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import Colores from './components/Auxiliares/AuxiliarColores/Colores';


function App() {
  
return ( 
    <CarritoProvider>
      <HyFJoubert> {/* TEMPLEATE */}
        <Routes>
          <Route exact path="/" Component={ItemListContainer}/>
          <Route path="/Productos" Component={ItemListContainer}/>
          <Route path="/Marca/:Marca" Component={ItemListContainer}/>
          <Route path="/Tipo/:Tipo" Component={ItemListContainer}/>
          <Route path="/Productos/:id" Component={ItemDetailContainer}/>
          <Route path="/Carrito" Component={Carrito}/>
          <Route path="/Checkout" Component={Checkout}/>
          <Route path="/Colores" Component={Colores}/>
          <Route path="*" element={<h2>ERROR 404 PAGINA NO ENCONTRADA</h2>}/>
        </Routes>
      </HyFJoubert>
    </CarritoProvider>
  );
}

export default App;
