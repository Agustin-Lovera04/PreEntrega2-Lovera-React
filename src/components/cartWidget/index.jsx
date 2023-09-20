import { Link } from "react-router-dom"
import "./styleCarrito.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartWidget = () => {
    const {contadorCarrito} = useContext(CartContext)
    return (
        <div className="App">
            <li className="nav-item imgCarrYCont">
                <Link to={"/cart"}><button className="carrito"></button></Link>
                <span className="contadorCarrito">{contadorCarrito()} </span>
            </li>
        </div>
    )
}
export default CartWidget