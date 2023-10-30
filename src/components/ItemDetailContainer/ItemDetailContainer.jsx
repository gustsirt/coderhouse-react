import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from '../../services/handleProducts';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  // variables propias
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)
  const {id} = useParams()

  // Gestionadores de cambio
  useEffect( () => {
    getProductById(id)
    .then (res => {
      setItem(res)
      verSiError(res)
    } )
  }, [id]);

  const verSiError = (res) => {
    !res.titulo ? setError("Su producto no se encuentra") : setError(null)
  }

  // Codigo Renderizado
  return (
    !item ? "Cargando" : (
    <>
      <div className='contenedor--centrado'>  
        <h2>{item.titulo}</h2>
        { item ? (
          error ? error :
          <ItemDetail item={item}/>
        ) : "Cargando"}
      </div>
    </>)
  )
}
