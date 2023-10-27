import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { ContextCar } from '../../Context/ContextCar';


export default function ItemDetail({id, descripcion, echoen, imagen, marca, materiales, precio, stock, tamaño, tipo, titulo }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const {addItem} = useContext(ContextCar)
  const ttt = Object(tamaño)

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
      <p>Tipo: {tipo}</p>
      <p>Origen: {echoen}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>Medidas: ↕ {ttt.alto} cm ↔ {ttt.ancho} cm ↗{ttt.profundidad} cm</p>
      <p>Descripcion: {descripcion}</p>
      <p>Material: {materiales}</p>

      {
        cantidadAgregada > 0 ? (
          <Link to="/Carrito">Ver Carrito</Link>
        ) : (
          <ItemCount stock={stock} initial={0} onAdd={agregarCant /* ! Seguir aca */}/>
        )
      }
    </div>
  )
}
