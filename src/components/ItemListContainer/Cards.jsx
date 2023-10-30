import React from 'react'
import { Link } from 'react-router-dom'


export default function Cards({id, titulo, tipo, imagen, marca, precio}) {
  return (
    <div className='card'>
      <Link to={`/Productos/${id}`}><img src={imagen} alt={titulo}/></Link>
      <h3>{titulo}</h3>
      <p>Marca: {marca}</p>
      <p>Tipo: {tipo}</p>
      <p>Precio: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio)}</p>
      <Link className="linkA" to={`/Productos/${id}`}>Ver Detalle</Link>
    </div>
  )
}
