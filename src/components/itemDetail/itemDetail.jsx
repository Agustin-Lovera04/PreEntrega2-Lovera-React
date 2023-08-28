import ItemCount from "../../containers/itemCount/itemCount"
import "./styleItemDetail.css"

const ItemDetail = ({ articulo }) => (
    articulo ? (
        <div className=" d-flex justify-content-center  align-items-center m-2 p-2">
            <div className="detailItem justify-content-center  align-items-center">
                <div className="card-image"><img className="imgCard" src={articulo.srcImg} alt="articulo"/></div>
                <p className="card-title">{articulo.nombre}</p>
                <p className="card-body">
                    Precio: ${articulo.precio}
                </p>
                <div className="d-flex justify-content-end"><ItemCount/></div>
                <div className="d-flex justify-content-center"><button className="btn btn-info">Agregar al Carrito</button></div>
            </div>
        </div>
    ) : (
        <div>Cargando Articulo...</div>
    )
)

export default ItemDetail
