import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HyFJoubert from './components/HyFJoubert/HyFJoubert';
import Inicio from './components/Inicio/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import Colores from './components/Auxiliares/AuxiliarColores/Colores';
import { CarritoProvider } from './Context/ContextCar';


function App() {
  
return ( 
    <BrowserRouter>
      <CarritoProvider>
        <HyFJoubert> {/* TEMPLEATE */}
          <Routes>
            <Route exact path="/" Component={Inicio}/>
            <Route path="/Productos" Component={ItemListContainer}/>
            <Route path="/Marca/:Marca" Component={ItemListContainer}/>
            <Route path="/Tipo/:Tipo" Component={ItemListContainer}/>
            <Route path="/Productos/:id" Component={ItemDetailContainer}/>
            <Route path="/Carrito" Component={Carrito}/>
            <Route path="/Colores" Component={Colores}/>
            <Route path="*" element={<h2>ERROR 404 PAGINA NO ENCONTRADA</h2>}/>
          </Routes>
        </HyFJoubert>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
