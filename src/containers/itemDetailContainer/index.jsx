import { useParams } from "react-router-dom"
import ItemDetail from "../../components/itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/client"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState({})
  const [cargando, setCargando] = useState(true)

  const articuloRef = doc(db, "articulos", id)
  
  const getArticuloFiltrado = () => {
    getDoc(articuloRef)
      .then((data) => {
        if (data.exists()) {
          setItemDetail(data.data())
          setCargando(false)
        }
      })
      .catch(() => {
        setCargando(false)
      })
  }

  useEffect(() => {
    getArticuloFiltrado()
  }, [id])

  return (
    <div>
      {cargando ? (
        <span className="loader"></span>
      ) : (
        <div>
          <ItemDetail articulo={itemDetail} />
        </div>
      )}
    </div>
  )
}

export default ItemDetailContainer
