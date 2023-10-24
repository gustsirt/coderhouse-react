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

<h3 style="color: orange">MANAEJO DE DATOS</h3>

<h4 style="color: yellow">SERVICIO: FIREBASE</h4>

Se realizo segun lo especificado, se cambio el vencimiento del modo de prueba hasta 31/12/2023, modificando las reglas del mismo

* La Carga de Datos Iniciales se realizo mediante en un componente Auxiliar (ver al final de esta documentación)

---

<h3 style="color: green">PAGINAS (ROUTES)</h3>

<h4 style="color: yellow">COMPONENTE: PRODUCTOS (item List)</h4>





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
