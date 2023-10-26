import React, { useEffect } from 'react'

export const useCount = (producto) => {
  const [unidades, setUnidades] = useState(0)
  const [limiteMax, setLimiteMax] = useState(false)
  const [limiteMin, setLimiteMin] = useState(true)

  const incrementar = () => { setUnidades ( unidades+1 ) }
  const decrementar = () => { setUnidades ( unidades-1 ) }

  useEffect(() => {
    if( unidades == 0 )         { setLimiteMin(true)
    } else if( unidades >= 1 )  { setLimiteMin(false)
    }
    if(unidades == producto.stock )      { setLimiteMax(true)
    }
  } , [unidades])

  return { incrementar, decrementar, limiteMax, limiteMin, unidades }
}
