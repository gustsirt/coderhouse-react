import { db } from "../../services/firebaseConfig"
import { doc, writeBatch } from "firebase/firestore"
import React from 'react'


// ESTE COMPONENTE ES UN COMPONENTE QUE REALICE SOLO PARA CARGAR LOS DATOS INICIALES
export default function AgregarIniciales() {

  const prodIniciales = [
    {
      titulo: "Matryoshka Bag",
      precio: 225300,
      materiales: "100% cuero",
      echoen: "España",
      imagen: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h50/h70/9590558359582/9590558294046/9590558294046.jpg",
      marca: "Carolina Herrera",
      stock: 5,
      tipo: "Bandolera",
      tamaño: {
        ancho: 22,
        alto: 11,
        profundidad: 9.5,
      },
      color: "Beige",
      descripcion: "Confeccionado con piel de becerro suave como la mantequilla y rematado con una flor hecha a mano, este bolso Mini Matryoshka aportará romance a cualquier conjunto. Correa con cierre de tachuelas en la parte superior. Cadena de serpiente. Pies de latón. Sin forro"
    },
    {
      titulo: "Matryoshka Bag",
      precio: 225300,
      materiales: "100% cuero",
      echoen: "España",
      imagen: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/ha6/hdd/9590557245470/9590557179934/9590557179934.jpg",
      marca: "Carolina Herrera",
      stock: 8,
      tipo: "Bandolera",
      tamaño: {
        ancho: 22,
        alto: 11,
        profundidad: 9.5,
      },
      color: "Negro",
      descripcion: "Confeccionado con piel de becerro suave como la mantequilla y rematado con una flor hecha a mano, este bolso Mini Matryoshka aportará romance a cualquier conjunto. Correa con cierre de tachuelas en la parte superior. Cadena de serpiente. Pies de latón. Sin forro"
    },
    {
      titulo: "Matryoshka Bag",
      precio: 225300,
      materiales: "100% cuero",
      echoen: "España",
      imagen: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h7f/hbf/9590556459038/9590556393502/9590556393502.jpg",
      marca: "Carolina Herrera",
      stock: 9,
      tipo: "Bandolera",
      tamaño: {
        ancho: 22,
        alto: 11,
        profundidad: 9.5,
      },
      color: "Rojo",
      descripcion: "Confeccionado con piel de becerro suave como la mantequilla y rematado con una flor hecha a mano, este bolso Mini Matryoshka aportará romance a cualquier conjunto. Correa con cierre de tachuelas en la parte superior. Cadena de serpiente. Pies de latón. Sin forro"
    },
    {
      titulo: "Matryoshka Bag II",
      precio: 191000,
      materiales: "100% Piel Baobab / 100% Faya de Seda",
      echoen: "España",
      imagen: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h21/h70/9512858484766/9512858419230/9512858419230.jpg",
      marca: "Carolina Herrera",
      stock: 8,
      tipo: "Bandolera",
      tamaño: {
        ancho: 22,
        alto: 11,
        profundidad: 9.5,
      },
      color: "Negro y Rojo",
      descripcion: "Un asa de faya de seda anudada aporta glamour de alta costura a este bolso Matroyshka, confeccionado en España con piel de baobab con un grano sutil y natural."
    },
    {
      titulo: "Initials Insignia Handbag with Leather Handle",
      precio: 559400,
      materiales: "100% piel de becerro",
      echoen: "España",
      imagen: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h21/h70/9512858484766/9512858419230/9512858419230.jpg",
      marca: "Carolina Herrera",
      stock: 8,
      tipo: "Cartera",
      tamaño: {
        ancho: 20,
        alto: 15,
        profundidad: 8,
      },
      color: "Blanco",
      descripcion: "Confeccionado en suave piel de becerro, este colorido bolso de mano Initials Insignia en dos tonos presenta un asa extraíble y las icónicas iniciales de Carolina Herrera."
    },
    {
      titulo: "ARLES",
      precio: 376244,
      materiales: "100% algodón.",
      echoen: "España",
      imagen: "https://ernestodebarcelona.com/cdn/shop/products/3ef363_edc5cf09628e49b5ac71a68585e1793a_mv2_704x704.png?v=1628507897",
      marca: "Ernesto",
      stock: 25,
      tipo: "Bolso",
      tamaño: {
        ancho: 32,
        alto: 34
      },
      color: "Negro y Rojo",
      descripcion: "Bolsa de algodón hecha a mano."
    },
    {
      titulo: "CANNES",
      precio: 376244,
      materiales: "100% algodón.",
      echoen: "España",
      imagen: "https://ernestodebarcelona.com/cdn/shop/products/3ef363_6dc17632af514787a1fc81b24f4dcd38_mv2_704x704.png?v=1628507714",
      marca: "Ernesto",
      stock: 25,
      tipo: "Bolso",
      tamaño: {
        ancho: 37,
        alto: 42
      },
      color: "Otoño varios tonos",
      descripcion: "Bolsa de algodón hecha a mano."
    },
    {
      titulo: "Cartera de cuero Candelaria",
      precio: 98900,
      materiales: "100% cuero.",
      echoen: "Argentina",
      imagen: "https://juanitajo.com/33155-thickbox_default/cartera-de-cuero-candelaria.jpg",
      marca: "Juanita Jo",
      stock: 25,
      tipo: "Cartera",
      tamaño: {
        ancho: 32,
        alto: 29,
        profundidad: 14,
  
      },
      color: "Negro",
      descripcion: "Dale la bienvenida a la cartera Candelaria! Un auténtico clásico, elevado al máximo nivel de estilo. Esta pieza está confeccionada en cuero. La versatilidad es su punto fuerte: con su correa regulable y extraíble, podés llevarla al hombro o cruzada según te convenga. Tu comodidad está asegurada en cualquier ocasión."
    },
    {
      titulo: "Bandolea de cuero Amelia",
      precio: 65900,
      materiales: "100% cuero.",
      echoen: "Argentina",
      imagen: "https://juanitajo.com/33176-thickbox_default/bandolera-de-cuero-amelia.jpg",
      marca: "Juanita Jo",
      stock: 40,
      tipo: "Bandolera",
      tamaño: {
        ancho: 23,
        alto: 15,
        profundidad: 15,
  
      },
      color: "Animal print",
      descripcion: "¿Buscás una bandolera para el uso diario que combine funcionalidad y estilo? La Bandolera Amelia es todo lo que necesitás: funcionalidad, comodidad y diseño con onda. Está confeccionada en  cuero y en el interior cuenta con un bolsillo con cierre. Además, posee la chapa siliconada de Juanita."
    },
    {
      titulo: "Cartera de cuero Marta",
      precio: 76900,
      materiales: "100% cuero.",
      echoen: "Argentina",
      imagen: "https://juanitajo.com/33190-thickbox_default/cartera-de-cuero-marta.jpg",
      marca: "Juanita Jo",
      stock: 30,
      tipo: "Bandolera",
      tamaño: {
        ancho: 33,
        alto: 25,
        profundidad: 18,
      },
      color: "Negro",
      descripcion: "¡La clave del éxito está guardada en una Juanita! Nuestra cartera Marta es súper clásica ¡Nunca falla! Por su tamaño y comodidad se ha convertido en un imprescindible del guardarropa. Está confeccionada en cuero y luce la clásica chapa de Juanita. En su interior cuenta con un bolsillo con cierre."
    }
  ]
  
  const cargarDatos = () => {

    const batch = writeBatch(db)

    const docs = [
      doc(db, "productos", "3u9GVbdpVHgLE14bzFQh"),
      doc(db, "productos", "51wOfecNPurlRaRLMjmi"),
      doc(db, "productos", "EW0KGypToX17HceHas0A"),
      doc(db, "productos", "Ei2jH3GAzPFJMA7mZYZF"),
      doc(db, "productos", "KNlMr2Njh0EmjQslEeIc"),
      doc(db, "productos", "M4ttU7RRBeQLYpyG4SZ0"),
      doc(db, "productos", "TAYyXONvVskNB8N3Yw9p"),
      doc(db, "productos", "b7D6jGlHs8cRhlyys6jC"),
      doc(db, "productos", "lZOkxQxv6bZBhSWYXEua"),
      doc(db, "productos", "ytT3Vuvdvmd2bPWVOvm1")
    ]

    for (let i = 0; docs < docs.length; i++) {
      batch.set(docs[i], prodIniciales[i])
      
    }

    batch.commit()

  }

  return (
    <button onClick={cargarDatos()}>Agregar Datos Iniciales</button>
  )
}





