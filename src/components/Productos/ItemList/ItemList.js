import React from "react";
import "./styles.css";
import Cards from "./Cards/Cards";

export default function ItemList({products}) {
  
  return (
    <div className="itemList">
      {products.map ( elm => <Cards key={elm.id} {...elm} /> )}
    </div>
  );
}