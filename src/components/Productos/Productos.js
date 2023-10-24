import React, { useEffect, useState } from "react";
import "./styles.css";
import ItemList from "./ItemList/ItemList";
import { getProducts, getProductsByMarca } from "../handleProducts";
import { useParams } from "react-router-dom";

export default function Productos(props) {
  const [productos, setProductos] = useState([])

  const {Marca} = useParams()

  useEffect(() => {
    const funcion = Marca ? getProductsByMarca : getProducts

    funcion(Marca)
      .then ( res => {setProductos(res)} )
      .catch ( error => console.error(error))
  },[Marca])

  return (
    <>
      <h2> Productos </h2>      
      <ItemList products={productos}/>
    </>
    
  );
}
