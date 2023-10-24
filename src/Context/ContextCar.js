import React, { useState } from 'react'
import { createContext } from 'react'

export const ContextCar = createContext({
  carrito: []
})

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([])

  console.log(carrito);

  const isInCarrito = (itemId) => {
    return carrito.some(prod => prod.id === itemId)
  }

  const addItem = (item, cantidad) => {
    if (!isInCarrito(item.id)) {
      setCarrito (prev => [...prev, {...item, cantidad}])
    } else {
      console.error("El producto ya fue agregado");
    }
  }

  const removeItem = (itemId) => {
    const carritoModificado = carrito.filter(prod => prod.id !== itemId) 
    setCarrito (carritoModificado)
  }

  const clearItems = () => {
    setCarrito([])
  }

  const cantidadTotal = () => {
    return carrito.length }

  const montoTotal = () => {
    return carrito.reduce( (acum, ele) => {return acum + ele.precio*ele.cantidad}, 0)
  }
  
  return (
    <ContextCar.Provider value={{carrito, addItem, removeItem, clearItems, cantidadTotal, montoTotal}}>
      {children}
    </ContextCar.Provider>
  )
}