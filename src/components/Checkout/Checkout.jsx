import { useContext, useState } from "react"
import { ContextCar } from "../../Context/ContextCar"
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Detalle from "./Detalle";

export default function Checkout() {

  const {carrito, montoTotal, clearItems} = useContext(ContextCar)
  const { register, handleSubmit } = useForm();
  const [idpedido, setIdpedido] = useState("")
  const [compra, setCompra] = useState([])
  const [total, setTotal] = useState([])

  const MySwal = withReactContent(Swal) // declaro variable para realizar bien la alerta

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: montoTotal()
    }

    
    const pedidosRef = collection(db, 'pedidos')
    
    setIdpedido("Xm7pIWVd5iPUP5jfgkek")
    setCompra(carrito)
    setTotal(montoTotal())
    /*addDoc(pedidosRef, pedido)
    .then(doc => {
      setIdpedido(doc.id)
      clearItems()
    })*/
  }

  const errorSubmit = () => {
    MySwal.fire({
      title: <strong>Mal</strong>,
      text: 'Debes completar todos los campos',
      icon: 'error'
    })
  } 

  if (idpedido) {
    return (
        <Detalle idpedido={idpedido} data={compra} total={total}/>
    )
  }

  return (

    <div>
      <h2>Finalizar Compra</h2>

        <form onSubmit={handleSubmit(comprar, errorSubmit)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="text" placeholder="Ingresá tu apellido" {...register("apellido", { required: true, pattern: /^[A-Za-z]+$/i})} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true})} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true})} />

            <button type="submit">Comprar</button>

        </form>
    </div>

  )
}
