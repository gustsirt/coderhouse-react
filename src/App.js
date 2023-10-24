import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HyFJoubert from './components/HyFJoubert/HyFJoubert';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos/Productos';
import ItemDetail from './components/Productos/ItemDetail/ItemDetail'
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
            <Route path="/Productos" Component={Productos}/>
            <Route path="/Marca/:Marca" Component={Productos}/>
            <Route path="/Productos/:id" Component={ItemDetail}/>
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
