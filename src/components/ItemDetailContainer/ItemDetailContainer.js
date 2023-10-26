import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css";
import ItemDetail from './ItemDetail';
import { getProductById } from '../../services/handleProducts';

export default function ItemDetailContainer() {
  const {id} = useParams()

  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    getProductById(id)
    .then(res => setProduct(res))
  },[id])

  return (
    <div className='itemDetail'>  
      <ItemDetail {...product}/>
    </div>
  )
}
