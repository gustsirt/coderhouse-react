import React from "react";
import "./styles.css";

export default function ItemCount({cantidad,handleRestar,handleSumar,handleAgregar,}) {
  
  return (
    <div className="contador">
      <div className="controles">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <div>
        <button className="boton" onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </div>
  );
}
