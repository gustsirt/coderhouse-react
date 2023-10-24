const misProductos = [
  {
    id: "1",
    titulo: "Cartera Bandolera Prüne Penny Diseño Liso De Cuero Saffiano",
    imagen: "http://http2.mlstatic.com/D_708860-MLA70162187013_062023-I.jpg",
    marca: "Prune",
    precio: 74900,
    stock: 10
  },
  {
    id: "2",
    titulo: "Cartera Prune Liquidación Color Suela",
    imagen: "http://http2.mlstatic.com/D_872239-MLA71285942140_082023-O.jpg",
    marca: "Prune",
    precio: 39990,
    stock: 8
  },
  {
    id: "3",
    titulo: "Prune Cartera Sobre Portapapeles Praga Animal Print",
    imagen: "http://http2.mlstatic.com/D_924383-MLA51835486258_102022-O.jpg",
    marca: "Prune",
    precio: 31900,
    stock: 15
  },
  {
    id: "4",
    titulo: "Cartera Prune Liquidación Mejor Precio Y Calidad!",
    imagen: "http://http2.mlstatic.com/D_643389-MLA71392697803_082023-O.jpg",
    marca: "Prune",
    precio: 49900,
    stock: 30
  },
  {
    id: "5",
    titulo: "Cartera Estee Lauder",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_352815-MLA25308054057_012017-F.webp",
    marca: "EsteeLauder",
    precio: 9900,
    stock: 3
  },
  {
    id: "6",
    titulo: "Bolso Puffer Cartera Estée Lauder Shopper Tote",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_933748-MLA70353946632_072023-O.webp",
    marca: "EsteeLauder",
    precio: 17600,
    stock: 5
  },
  {
    id: "7",
    titulo: "Cartera Bolso Estee Lauder Con Carey",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_761191-MLA69643945617_052023-O.webp",
    marca: "EsteeLauder",
    precio: 22000,
    stock: 2
  }
]

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(misProductos)
    }, 500)
  })
}

export const getProductById = (idLlamado) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(misProductos.find((prd) => prd.id === idLlamado))
    }, 500)
  })
}

export const getProductsByMarca = (idMarca) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve( misProductos.filter( (prd) => prd.marca === idMarca))
    }, 500)
  })
}