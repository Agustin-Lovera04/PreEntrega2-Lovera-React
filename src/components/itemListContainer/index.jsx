import "./styleItemListCont.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/client"
import ItemList from "../itemList/itemList"

const ItemListContainer = () => {
  const { id } = useParams()
  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)

  const articulosRef = collection(db, "articulos")

  const getArticulos = () => {
    const definicionArticulos = id ? 
    query(
      collection(db, "articulos"),
      where("category", "==", id)
       ) : (
        articulosRef
      )


    getDocs(definicionArticulos)
      .then((data) => {
        const dataFiltro = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setArticulos(dataFiltro)
        setCargando(false)
      })
      .catch(() => {
        setCargando(false)
        return (
          <>
            <h1>ERROR AL CARGAR ARCHIVOS EXTERNOS</h1>
          </>
        )
      })
  }

  useEffect(() => {
    getArticulos()
  }, [id])

  return (
    <div>
      {cargando ? (
        <span className="loader"></span>
      ) : (
        <div>
          <ItemList articulos={articulos} id={id}/>
          <a href="https://w.app/W98juf" className="boton-flotante" target="_blank">
            <img src="/public/imagenes/whatsapp (1).png" alt="btn whatsapp" />
          </a>
        </div>
      )}
    </div>
  )
}

export default ItemListContainer
