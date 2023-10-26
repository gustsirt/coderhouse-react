import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig"

export const getProducts = () => {
  const collectionref = collection(db, 'productos')

  return new Promise ((resolve) => {
    getDocs(collectionref)
    .then(res => resolve(
        res.docs.map(
            (doc) => { return { id: doc.id, ...doc.data()} }
          )
      ))
  })  
}

export const getProductById = (idLlamado) => {
  const docref = doc(db, 'productos', idLlamado)

  return new Promise ((resolve) => {
    getDoc(docref)
    .then(res => resolve({ id: res.id, ...res.data()} ))
  })
}

export const getProductsByMarca = (marca) => {
  const collectionref = collection(db, 'productos')
  
  switch (marca) {
    case "CarolinaHerrera":
      marca = "Carolina Herrera"
      break
    case "JuanitaJo":
      marca = "Juanita Jo"
      break
    default:
      break
  }

  return new Promise ((resolve) => {
    getDocs(query(collectionref, where("marca", "==", marca)))
    .then(res => resolve(
        res.docs.map(
            (doc) => { return { id: doc.id, ...doc.data()} }
          )
      ))
  })  
}

export const getProductsByTipo = (tipo) => {
  const collectionref = collection(db, 'productos')
  
  return new Promise ((resolve) => {
    getDocs(query(collectionref, where("tipo", "==", tipo)))
    .then(res => resolve(
        res.docs.map(
            (doc) => { return { id: doc.id, ...doc.data()} }
          )
      ))
  })  
}