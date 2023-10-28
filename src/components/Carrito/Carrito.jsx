import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCar } from '../../Context/ContextCar'
import CarritoItem from './CarritoItem'
import './styles.css'

export default function Carrito() {

  const {carrito, clearItems, cantidadTotal, montoTotal} = useContext(ContextCar)

  // TODO falta agregar el removeItem sobre cada linea

  return (
    cantidadTotal() === 0 ? (
      <>
        <h3>No hay elementos en el Carrito</h3>
        <Link to="/Productos"> Productos </Link>
      </>
    ) : (
      <>
        <div>
          <h3>Carrito</h3>
        </div>
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
      </>
    )
  )
}
