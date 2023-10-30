import { useContext, useState } from "react"
import { ContextCar } from "../../Context/ContextCar"
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Detalle from "./Detalle";

export default function Checkout() {

  // inicia Form y el SweetAlert (alertas)
  const { register, handleSubmit } = useForm();
  const MySwal = withReactContent(Swal)

    // variables propias se usa para armar el detalle
  const {carrito, montoTotal, clearItems} = useContext(ContextCar)
  const [idpedido, setIdpedido] = useState("")
  const [compra, setCompra] = useState([])
  const [total, setTotal] = useState([])

  // Gestionadores de eventos formulario
  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: montoTotal()
    }

    const pedidosRef = collection(db, 'pedidos')
    addDoc(pedidosRef, pedido)
    .then(doc => {
      setIdpedido(doc.id)
      setCompra(carrito)
      setTotal(montoTotal())
      clearItems()
    })
  }

  const errorSubmit = () => {
    MySwal.fire({
      title: <strong>Mal</strong>,
      text: 'Debes completar todos los campos',
      icon: 'error'
    })
  } 

  // Codigo Renderizado
  if (idpedido) {
    return (
        <Detalle idpedido={idpedido} data={compra} total={total}/>
    )
  }

  return (

    <>
      <h2>Finalizar Compra</h2>

      <form className="formulario" onSubmit={handleSubmit(comprar, errorSubmit)}>

          <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true, pattern: /^[A-Za-z]+$/i})} />
          <input type="text" placeholder="Ingresá tu apellido" {...register("apellido", { required: true, pattern: /^[A-Za-z]+$/i})} />
          <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true})} />
          <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true})} />

          <button type="submit">Comprar</button>

      </form>
    </>

  )
}
