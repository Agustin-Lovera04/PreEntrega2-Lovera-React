import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

const ItemCount = ({ articulo }) => {
  const { addToCart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const lanzarToastify = () => {
    Toastify({
      text: "AGREGADO AL CARRITO",
      className: "info",
      style: {
        background: "linear-gradient(to right, #FF5733, #FF4E50)",
        color: "white", 
        fontWeight: "bold",
      },
      gravity: "bottom"
    }).showToast()
    
  }

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger m-1 countBtn" onClick={restar}>
            -
          </button>
          <h4 className="p-2 m-2">{count}</h4>
          <button className="btn btn-success m-1 countBtn" onClick={sumar}>
            +
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <button className="btn btn-info " onClick={() => (addToCart(articulo, count), setCount(1), lanzarToastify())}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
