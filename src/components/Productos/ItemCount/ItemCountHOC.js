import React, {useState} from 'react';
import "./styles.css";
import { useCount } from './useCount';
import { useParams } from 'react-router-dom';

export default function ItemCountHOC(Componente +) {
  const {id} = useParams()
  
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(id)
      .then ( res => {setProduct(res)} )
      .catch ( error => console.error(error))
  },[id])

  function NewComponent () {
    const { incrementar, decrementar, limiteMax, limiteMin, unidades } = useCount(product)

    return (
      <>
        <h1>{product.titulo}</h1>
        <Componente cuenta={unidades} incrementar={incrementar} decrementar={decrementar} limiteMax={limiteMax} limiteMin={limiteMin}/>
      </>
      )
    } // fin funcion

  return NewComponent
}

