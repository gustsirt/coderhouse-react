import React, { useEffect, useState } from "react";
import "./styles.css";
import ItemList from "./ItemList/ItemList";
import { getProducts, getProductsByMarca, getProductsByTipo } from "../../services/handleProducts";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const [productos, setProductos] = useState([])

  const {Marca} = useParams()
  const {Tipo} = useParams()
  
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

  

  return (
    <>
      <h2> Productos </h2>      
      {<ItemList products={productos}/>}
    </>
    
  );
}
