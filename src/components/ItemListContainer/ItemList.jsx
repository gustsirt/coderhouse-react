import React from "react";
import Cards from "./Cards";

export default function ItemList({products}) {
  
  return (
    <div className="contenedor--horizontal">
      {products.map ( elm => <Cards key={elm.id} {...elm} /> )}
    </div>
  );
}