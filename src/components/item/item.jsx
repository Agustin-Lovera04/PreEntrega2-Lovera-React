import { Link } from "react-router-dom"


const Item = ({ articulos, id }) => {
  return (
    <div className="containerItems d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
      {articulos.map(({ id, title, price, image }) => (
        <div key={id} className="card m-2 p-2">
          <div className="bg d-flex justify-content-center align-items-center p-2">
            <h3 className="titleCard fw-bolder">{title}</h3>
            <div className="c2">
              <div className="imgCardContainer">
                <img className="imgCard" src={image} alt="articulo" />
              </div>
              <h3 className="precioCard">$-{price}</h3>
              <button className="btn btn-secondary btn-sm m-1 p-1"><Link className="text-light text-decoration-none fw-bolder" to={`/item/${id}` }>Ver Detalle</Link></button>
            </div>
          </div>
          <div className="blob"></div>
        </div>
      ))}
    </div>
  )
}

export default Item
