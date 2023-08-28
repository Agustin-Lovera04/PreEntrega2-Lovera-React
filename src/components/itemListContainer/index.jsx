import "./styleItemListCont.css"
import { useParams } from "react-router-dom"
import Cards from "../../containers/cards"
import ConsultaBack from "../../containers/consultarBack"

const ItemListContainer = () => {
  const { id } = useParams()
  const { articulos, cargando } = ConsultaBack()

  return (
    <div>
      {cargando ? (
        <h1>Cargando Articulos...</h1>
      ) : (
        <div>
          <Cards articulos={articulos} id={id} />
        </div>
      )}
    </div>
  )
}

export default ItemListContainer
