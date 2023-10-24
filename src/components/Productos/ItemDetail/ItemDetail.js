import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css";
import Item from './Item/Item';
import { getProductById } from '../../handleProducts';


export default function ItemDetail() {
  const {id} = useParams()

  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    getProductById(id)
      .then ( res => {setProduct(res)} )
      .catch ( error => console.error(error))
  },[id])

  return (
    <div className='itemDetail'>
      <Item {...product}/>
    </div>
  )
}
