import React, { useContext, useState} from "react";
import ItemCount from "./ItemCount/ItemCount";
import { ContextCar } from "../../Context/ContextCar";

export default function ItemDetail({item}) {
  const ttt = Object(item.tamaño); // auxiliar para obtener las medidas del producto

  const { addItem } = useContext(ContextCar); // obtiene carrito

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="item">
      <img src={item.imagen} alt={item.titulo} />
      <h3>{item.titulo}</h3>
      <p>Marca: {item.marca}</p>
      <p>Tipo: {item.tipo}</p>
      <p>Origen: {item.echoen}</p>
      <p>Precio: {item.precio}</p>
      <p>Stock: {item.stock}</p>
      <p>Medidas: ↕ {ttt.alto} cm ↔ {ttt.ancho} cm ↗{ttt.profundidad} cm</p>
      <p>Descripcion: {item.descripcion}</p>
      <p>Material: {item.materiales}</p>

      <ItemCount
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleRestar={handleRestar}
        handleAgregar={() => { addItem(item, cantidad) }}
      />
    </div>
  );
}
