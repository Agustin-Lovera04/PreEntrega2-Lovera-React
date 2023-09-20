import { useContext } from "react"
import "./cartItem.css"
import { CartContext } from "../../context/cartContext"

const CartItem = ({articulo}) => {
  const { removeArticulo, restarCantidadInCart, sumarCantidadInCart } = useContext(CartContext)

  return (
    <div className="cart-item">
      <img className="image" src={articulo.image} alt="Producto" />
      <div className="info">
        <h3 className="title">{articulo.title}</h3>
        <p className="price">$-{articulo.price}</p>
        <p className="price">Unidades: {articulo.cantidad}</p>
      </div>
      <div className="actions">
        <button className="sumar btn btn-success" onClick={() => sumarCantidadInCart(articulo.id, 1)}>+</button>
        <button className="restar btn btn-danger" onClick={() => restarCantidadInCart(articulo.id)}>-</button>
        <button className="eliminar btn btn-danger" onClick={() => removeArticulo(articulo.id)}><img className="trash" src="imagenes/basura.png" alt="" /></button>
      </div>
    </div>
  )
}

export default CartItem
