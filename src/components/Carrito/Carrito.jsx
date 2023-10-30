import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCar } from '../../Context/ContextCar'
import CarritoItem from './CarritoItem'

export default function Carrito() {

  const {carrito, clearItems, cantidadTotal, montoTotal} = useContext(ContextCar)

  return (
    cantidadTotal() === 0 ? (
      <>
        <h3>No hay elementos en el Carrito</h3>
        <Link to="/Productos"> Productos </Link>
      </>
    ) : (
      <>
        <h2 className='tituloInterno'>Carrito</h2>
        <div className='contenedor--centrado'>

          <table className='tablaCarrito'>
            <tbody>
              {carrito.map(prd => <CarritoItem key={prd.id} {...prd}/>)}
            </tbody>
          </table>

          <div className='carritoFooter'>
            <button onClick={() => clearItems()}> Limpiar Carrito </button>
            <Link className="linkA" to="/Checkout">Finalizar Compra</Link>
            <h3>Total: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(montoTotal())}</h3>
          </div>
        </div>
      </>
    )
  )
}
