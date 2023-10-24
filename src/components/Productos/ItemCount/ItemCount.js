import React, {useState} from 'react';
import "./styles.css";

export default function ItemCount({stock, initial, onAdd}) {

  const [cantidad, setCantidad] = useState(initial)

  const incrementar = () => {
    if (cantidad<stock) {
      setCantidad(cantidad+1)
    }
  }

  const decrementar = () => {
    if (cantidad>0) {
      setCantidad(cantidad-1)
    }
  }

  return (
    <div className='contador'>
      <div className='controles'>
        <button className='boton' onClick={decrementar}>-</button>
        <p>{cantidad}</p>
        <button className='boton' onClick={incrementar}>+</button>
      </div>
      <div>
        <button className='boton' onClick={() => onAdd(cantidad)} disabled={!stock}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

