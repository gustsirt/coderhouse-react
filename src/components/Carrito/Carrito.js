import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCar } from '../../Context/ContextCar'
import CarritoItem from './CarritoItem'

export default function Carrito() {
  const {carrito, clearItems, cantidadTotal, montoTotal} = useContext(ContextCar)
  // TODO falta agregar el removeItem sobre cada linea
  return (
    cantidadTotal() === 0 ? (
      <>
        <h2>No hay elementos en el Carrito</h2>
        <Link to="/Productos"> Productos </Link>
      </>
    ) : (
      <div className='carrito'>
        <div className='elementos'>
          {carrito.map(prd => <CarritoItem key={prd.id} {...prd}/>)}
        </div>
        <div className='carritoFooter'>
          <h3>Total: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(montoTotal())}</h3>
          <button onClick={() => clearItems()}> Limpiar Carrito </button>
          <Link to="checkout">Checkout</Link>
        </div>
      </div>
    )
  )
}
