import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles.css";
import ItemDetail from './ItemDetail';
//import { getProductById } from '../../services/handleProducts';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';


export default function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const {id} = useParams()
  
  useEffect( () => {
    const docref = doc(db, 'productos', id)
    getDoc(docref)
    .then((res) => {
      setItem({ id: res.id, ...res.data()})
    })
  }, [id]);

  return (
    <div className='itemDetail'>  
      {item? <ItemDetail item={item}/> : "Cargando"}
    </div>
  )
}
