import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiX } from "react-icons/bi";
import { ContextCar } from '../../Context/ContextCar';


export default function CarritoItem({id, imagen, titulo, precio, cantidad}) {

  const {removeItem} = useContext(ContextCar)
  

  return (
    <tr className='renglon'>
      <td><img src={imagen} alt={titulo}/></td>
      <td><Link className="linkA" to={`/Productos/${id}`}>{titulo}</Link></td>
      <td><strong>Precio unitario:</strong> {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio)}</td>
      <td><strong>Cantidad:</strong> {cantidad}</td>
      <td><strong>Subtotal</strong>: {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(precio*cantidad)}</td>
      <td><button onClick={()=>(removeItem(id))}><BiX/></button></td>
    </tr>
  )
}
