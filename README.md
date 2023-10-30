# Primera pre - entrega - Crea tu landing
## Alumno: Sirtori Gustavo

---

* Profesor: Everaldo Guevara
* Comisión: 57980 --- React Js
* Tutor: Franco David Garay

---
<h3 style="color: blue">TEMPLATE</h3>

<h4 style="color: yellow">COMPONENTE: HYFJOUBERT -> Header y Footer Joubert</h4>

Es el componente donde se ubica el header y el footer

*Respecto al HEADER contiene:*
 - Titulo con link al inicio
 - Titulo Variable, segun la ubicacion
 - Un nav completo, con dropdown segun marcas o tipos

*Respecto al Footer*

 - No tiene nada especial, solo "acceso" a las redes sociales y un Copyright con año dinamico.

---

<h3 style="color: blue">ESTILOS</h3>

Se centrara todo en un archivo Scss ligado a App.scss incluido en App.
Se podria generar estilos mas apropados en cada componente pero eso lo hace mas confuso y en general una pagina web tiene un estilo unificado salvo elementos muy especificos donde si se requerria css adicional.

POR EXCEPCION: HyJJoubert - Header y Footer - Si tiene css personalizado.

---
<h3 style="color: orange">MANAEJO DE DATOS</h3>

<h4 style="color: yellow">SERVICIO: FIREBASE</h4>
Se separa la logica de firebase en una carpeta "SERVICES"

En general todo se realizo segun lo especificado, pero si se cambio el vencimiento del modo de prueba hasta 31/12/2023, modificando las reglas del mismo

* La Carga de Datos Iniciales se realizo mediante en un componente Auxiliar (ver al final de esta documentación)

* Por ultimo se gestiona toda la logica de firebase desde handleProducts 

<h4 style="color: yellow">CONTEXT - USA LOCALSTORAGE</h4>
Administra la logica del carrito

* Si hay sesion anterior la precarga al inicio

* pose las gestiones necesaias: agregar item, sacar todos, remover uno y brindar totalizadores

* Tambien hace de ***Provider***

---

<h3 style="color: green">PAGINAS (ROUTES)</h3>

<h4 style="color: yellow">COMPONENTE: ItemListContainer </h4>

Es el componente que muestra la lista de items (productos)

* Posee 3 componentes anidados

 1. ***ItemListContainer***
    * Concentra la logica de que datos mostrar
    * Muestra el titulo
    * Llama a ***ItemList*** (le pasa los productos)
 2. ***ItemList***
    * Solo es contenedor horizontal
    * Llama a ***Item*** (le pasa cada producto por separado)
 3. ***Item***
    * Muestra los productos

<h4 style="color: yellow">COMPONENTE: ItemDetailContainer </h4>

Es el componente que muestra 1 producto detalladamente

* Posee 3 componentes anidados

 1. ***ItemDetailContainer***
    * Concentra la logica del datos a mostrar
    * Muestra el titulo
    * Llama a ***ItemDetail*** (le pasa el prodcuto)
 2. ***ItemDetail***
    * Muestra el detalle del producto
    * Gestiona la logica del contador
    * Llama a ***ItemCount*** (le pasa por parametro la gestion del codigo)
 3. ***ItemCount***
    * Contador para agregar productos y agregar al carrito, pero no contiene gestion de logica
    * Contiene css propio xq peude ser reutilizado

<h4 style="color: yellow">COMPONENTE: Carrito </h4>

Es el componente que muestra la lista de productos agregados al carrito resumidos de forma compacta.
Tambien permite sacar un elemento agregado de mas.

* Posee 2 componentes anidados

 1. ***Carrito***
    * Obtiene el carrito desde el context
    * Muestra el titulo y el total de la compra
    * Tiene 2 botones: uno para limpiar el carrito y el otro para "finalizar la compra" (checkout)
    * Llama a ***CarritoItem*** (por un mapeo de cada item)
 2. ***CarritoItem***
    * Muestra cada producto en un linea
    * Puede quitar un producto de la lista

<h4 style="color: yellow">COMPONENTE: Checkout </h4>

Toma los datos de contacto del Comprador para "finalizar" la compra.

* Posee 3 componentes

 1. ***Checkout*** (USA SWEETALERT y REACT FORM)
    * Es un formulario que toma datos de contacto
    * En caso de no completar algun dato muestra una alerta
    * Al apretar el boton comprar llama a ***Detalle*** (le pasa los datos del pedido)
 2. ***Detalle***
    * Agradece la compra y muestra el ID de la operacion
    * Junto a ***DetalleRenglon*** muestra un detalle de la compra

---

<h3 style="color: purple">ELEMENTOS AUXILIARES</h3>
En una sitaución normal, todo ese contenido debería ser eliminado, sin embargo en mi manera de trabajar personal, suelo realizar copias de seguridad para trabajar cómodo conservando la copia en lo posible hasta momentos antes de que pase a produccion.
NOTA: en una situacion de documetos muy grandes, solo conservaria lo util, el resto se descartaría.

<h4 style="color: yellow">COMPONENTE: COLORES</h4>

Se creo con el fin de tener una referencia de colores para elegor el mas adecado para cada ocacion

<h4 style="color: yellow">BOTON AGREGAR DATOS INICIALES (en Componente Colores)</h4>

Con el fin de no agregar los datos uno por uno, primero se crearon los documentos vacios en firestore obteniendo el ID de uno, y con esos datos se modificó la funcion colocandolos en un array que al ejecutarse actualiza los datos "masivamente"
NOTA: se podria cambiar el ID de google por un ID "manual" creado masivamente.

<h4 style="color: yellow">FUNCIONES: handleProducts</h4>

Este documento luego se reemplazo. Solo se conservan como back up de lo que se realizó
