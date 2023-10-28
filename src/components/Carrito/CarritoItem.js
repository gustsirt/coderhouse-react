import React from 'react'
import { Link } from 'react-router-dom'


export default function CarritoItem({id, titulo, precio, cantidad}) {

  return (
    <div className='renglon'>
      <p className='reng-titulo'><Link to={`/Productos/${id}`}>{titulo}</Link></p>
      <p className='reng-precio'>Precio unitario: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio)}</p>
      <p className='reng-cantidad'>Cantidad: {cantidad}</p>
      <p className='reng-subtotal'>Subtotal: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio*cantidad)}</p>
    </div>
  )
}
