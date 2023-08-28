import BtnFlotante from "../components/btnflotante"
import {filtroCategoria} from "../containers/filtro"
import { Link } from "react-router-dom"


const Cards = ({ articulos, id }) => {
  const articulosFiltrados = id ? filtroCategoria(articulos, id) : articulos

  return (
    <div className="containerItems d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
      {articulosFiltrados.map(({ id, nombre, precio, srcImg }) => (
        <div key={id} className="card m-2 p-2">
          <div className="bg d-flex justify-content-center align-items-center p-2">
            <h3 className="titleCard fw-bolder">{nombre}</h3>
            <div className="c2">
              <div className="imgCardContainer">
                <img className="imgCard" src={srcImg} alt="articulo" />
              </div>
              <h3 className="precioCard">$-{precio}</h3>
              <button className="btn btn-secondary btn-sm m-1 p-1"><Link className="text-light text-decoration-none fw-bolder" to={`/item/${id}`}>Ver Detalle</Link></button>
            </div>
          </div>
          <div className="blob"></div>
        </div>
      ))}
      <BtnFlotante />
    </div>
  )
}

export default Cards
