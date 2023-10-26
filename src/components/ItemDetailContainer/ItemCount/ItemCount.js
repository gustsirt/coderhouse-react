import React from 'react';
import "./styles.css";

export default function ItemCount2({incrementar, decrementar, limiteMax, limiteMin, unidades}) {

  return (
    <div className='contador'>
      <div className='controles'>
        <button className='boton' disabled={limiteMin} onClick={()=>decrementar()}>-</button>
        {unidades}
        <button className='boton' disabled={limiteMax} onClick={()=>incrementar()}>+</button>
      </div>
      <div>
        <button className='boton'> Agregar al Carrito </button>
      </div>
    </div>
  )
}

