import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css";
import ItemDetail from './ItemDetail';
import { getProductById } from '../../services/handleProducts';

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const {id} = useParams()
  
  useEffect( () => {
    getProductById(id)
    .then (res => setItem(res))
  }, [id]);

  return (
    <div className='itemDetail'>  
      {item? <ItemDetail item={item}/> : "Cargando"}
    </div>
  )
}
