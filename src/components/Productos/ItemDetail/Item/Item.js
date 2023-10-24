import React, { useContext, useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { ContextCar } from '../../../../Context/ContextCar';

export default function Item({id, titulo, imagen, marca, precio, stock}) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const {addItem} = useContext(ContextCar)

  const agregarCant = (cantt) => {
    setCantidadAgregada(cantt)

    const item = {
      id, titulo, precio
    }

    addItem(item, cantt)
  }

  return (
    <div className='item'>
      <img src={imagen} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>Marca: {marca}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>SKU: {id}</p>

      {
        cantidadAgregada > 0 ? (
          <Link to="/Carrito">Ver Carrito</Link>
        ) : (
          <ItemCount stock={stock} initial={0} onAdd={agregarCant}/>
        )
      }
    </div>
  )
}
