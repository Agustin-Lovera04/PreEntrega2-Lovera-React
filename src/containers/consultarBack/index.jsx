import { useEffect, useState } from "react"

const ConsultaBack = () => {
  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/src/data/back.json")
      .then((response) => response.json())
      .then((data) => {
        setArticulos(data.articulos)
        setCargando(false)
      })
      .catch(() => {
        alert("404")
        setCargando(false)
      })
  }, [])

  return { articulos, cargando }
}

export default ConsultaBack
