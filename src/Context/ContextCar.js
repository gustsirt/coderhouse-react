import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ContextCar = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [] 

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState(carritoInicial)

  const addItem = (item, cantidad) => {
    const ItemXAgregar = {...item, cantidad}

    const nuevoCarrito = [...carrito]
    
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === ItemXAgregar.id);

    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push(ItemXAgregar);
    }
    setCarrito(nuevoCarrito);
  }

  const removeItem = (itemId) => {
    const carritoModificado = carrito.filter(prod => prod.id !== itemId) 
    setCarrito (carritoModificado)
  }

  const clearItems = () => {
    setCarrito([])
  }

  const cantidadTotal = () => {
    return carrito.reduce( (acum, ele) => {return acum + ele.cantidad}, 0)
  }

  const montoTotal = () => {
    return carrito.reduce( (acum, ele) => {return acum + ele.precio*ele.cantidad}, 0)
  }

  useEffect (() => {

    localStorage.setItem("carrito", JSON.stringify(carrito))

  }, [carrito])
  
  return (
    <ContextCar.Provider value={{carrito, addItem, removeItem, clearItems, cantidadTotal, montoTotal}}>
      {children}
    </ContextCar.Provider>
  )
}