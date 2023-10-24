import React from 'react'

export default function CarritoItem({titulo, precio, cantidad}) {

  return (
    <div className='renglon'>
      <p className='reng-titulo'>{titulo}</p>
      <p className='reng-precio'>Precio unitario: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio)}</p>
      <p className='reng-cantidad'>Cantidad: {cantidad}</p>
      <p className='reng-subtotal'>Subtotal: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio*cantidad)}</p>
    </div>
  )
}
