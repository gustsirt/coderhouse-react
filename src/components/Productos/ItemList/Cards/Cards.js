import React from 'react'
import { Link } from 'react-router-dom'


export default function Cards({id, titulo, imagen, marca, precio, stock}) {
  return (
    <div className='cards'>
      <Link to={`/Productos/${id}`}><img src={imagen} alt={titulo}/></Link>
      <h3>{titulo}</h3>
      <p>Marca: {marca}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>SKU: {id}</p>
      <Link to={`/Productos/${id}`}>Ver Detalle</Link>
    </div>
  )
}
