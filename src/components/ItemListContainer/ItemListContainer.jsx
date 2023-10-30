import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByMarca, getProductsByTipo } from "../../services/handleProducts";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {

  // variables propias
  const [productos, setProductos] = useState([])

  // use param
  const {Marca} = useParams()
  const {Tipo} = useParams()
  
  // Gestionadores de cambio
  useEffect(() => {
    let valor;
    let funcion;

    if (Marca) {
      valor = Marca
      funcion = getProductsByMarca
    } else if ( Tipo ) {
      valor = Tipo
      funcion = getProductsByTipo 
    } else {
      valor = ""
      funcion = getProducts
    }

    funcion(valor)
      .then ( res => {setProductos(res)} )
      .catch ( error => console.error(error))
  },[Marca, Tipo])
  
  // Codigo Renderizado
  return (
    <>
      <h2 className="tituloInterno"> Productos </h2>      
      { productos? <ItemList products={productos}/> : "Cargando" }
    </>
    
  );
}
