import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from '../../services/handleProducts';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  // variables propias
  const [item, setItem] = useState(null)
  const {id} = useParams()

  // Gestionadores de cambio
  useEffect( () => {
    getProductById(id)
    .then (res => setItem(res))
  }, [id]);

  // Codigo Renderizado
  return (
    !item ? "Cargando" : (
    <>
      <div className='contenedor--centrado'>  
        <h2>{item.titulo}</h2>
        {item? <ItemDetail item={item}/> : "Cargando"}
      </div>
    </>)
  )
}
