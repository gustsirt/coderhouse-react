import React, { useContext, useState} from "react";
import ItemCount from "./ItemCount/ItemCount";
import { ContextCar } from "../../Context/ContextCar";

export default function ItemDetail({item}) {
  // variables propias
  const ttt = Object(item.tamaño); // auxiliar para obtener las medidas del producto
  const { addItem } = useContext(ContextCar); // obtiene carrito
  const [cantidad, setCantidad] = useState(1);

  // logica acciones
  const handleRestar = () => { cantidad > 1          && setCantidad(cantidad - 1) }
  const handleSumar  = () => { cantidad < item.stock && setCantidad(cantidad + 1) }

  // Codigo Renderizado
  return (
    <div className="item">
      <img src={item.imagen} alt={item.titulo} />
      <div className="contenedor--centrado">
        <div className="itemDetail">
          <p><span>Marca:</span> {item.marca}</p>
          <p><span>Tipo:</span> {item.tipo}</p>
          <p><span>Origen:</span> {item.echoen}</p>
          <p><span>Precio:</span> {Intl.NumberFormat( "es-ar", {style: "currency", currency: "ARS"}).format(item.precio)}</p>
          <p><span>Stock:</span> {item.stock}</p>
          <p><span>Medidas:</span> ↕ {ttt.alto} cm ↔ {ttt.ancho} cm ↗{ttt.profundidad} cm</p>
          <p><span>Material:</span> {item.materiales}</p>
          <p><span>Descripcion:</span> {item.descripcion}</p>
        </div>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={() => { addItem(item, cantidad) }}
        />
      </div>
    </div>
  );
}
