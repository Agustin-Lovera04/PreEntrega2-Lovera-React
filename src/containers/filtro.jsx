export const filtroCategoria = (articulos, id) => {
    const articulosFiltrados = articulos.filter((articulo) => articulo.category === id)
    return articulosFiltrados
  }
  
export const filtroDetail = (articulos, id) => {
    const articulosDetails = articulos.find((articulo) => articulo.id === parseInt(id))
    return articulosDetails
  }