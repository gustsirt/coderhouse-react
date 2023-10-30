import React from "react";
import "./styles.css";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function ItemCount({cantidad,handleRestar,handleSumar,handleAgregar,limitMin,limitMax}) {
  
  return (
    <div className="contador">
      <div className="controles">
        <button onClick={handleRestar}><BiMinus/></button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}><BiPlus/></button>
      </div>
      <button className="boton" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
}
