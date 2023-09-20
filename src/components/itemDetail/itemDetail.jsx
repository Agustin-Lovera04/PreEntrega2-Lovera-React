import ItemCount from "../../containers/itemCount/itemCount"
import "./styleItemDetail.css"


const ItemDetail = ({ articulo }) => {
    return (
        <div className=" d-flex justify-content-center  align-items-center m-2 p-2">
            <div className="detailItem justify-content-center  align-items-center">
                <div className="card-image"><img className="imgCard" src={articulo.image} alt="articulo" /></div>
                <h1 className="card-title fs-3">{articulo.title}</h1>
                <p className="card-body fs-6">{articulo.description}</p><br />
                <p className="text-success fw-bolder fs-5">Precio: ${articulo.price}</p>
                <div><ItemCount articulo={articulo}/></div>
            </div>
        </div>
    )
}

export default ItemDetail
