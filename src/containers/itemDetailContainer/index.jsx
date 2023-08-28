import { useParams } from "react-router-dom"
import ItemDetail from "../../components/itemDetail/itemDetail"
import ConsultaBack from "../consultarBack"
import { filtroDetail } from "../filtro"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const { articulos, cargando } = ConsultaBack()
  const [itemDetail, setItemDetail] = useState({})

  useEffect(() => {
    const itemFiltrado = filtroDetail(articulos, id)
    setItemDetail(itemFiltrado)
  }, [articulos, id])

  return (
    <div>
      {cargando ? (
        <h1>Cargando Articulos...</h1>
      ) : (
        <div>
          <ItemDetail articulo={itemDetail} />
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer
