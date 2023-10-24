import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import './styles.css'
import { Link } from 'react-router-dom';
import { ContextCar } from '../../../Context/ContextCar';

export default function CartWidget() {
  const {cantidadTotal} = useContext(ContextCar)
  return (
    <div className='cartWidget'>
      <Link to="/Carrito"><BiCart/></Link><p>{cantidadTotal()}</p>
    </div>
  )
}
