import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartItem from "../cartItem/cartItem"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart, clearCart, totalPriceCart } = useContext(CartContext)

    return(

     cart.length > 0 ? (
        <div>
            {cart.map((articulo, id) => (
            <CartItem articulo={articulo} key={id}/>
            ))}

            <div className="total text-center mt-4">
                <h4>Total: <span className="text-primary">${totalPriceCart}</span></h4>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <Link to={"/order"}>
                <button className="btn btn-secondary p-2 m-3">Confirmar Compra</button>
                </Link>
                <button className="btn btn-danger p-2 m-3" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    ) : (
        <div className="total text-center mt-4">
            <h1> TU CARRITO ESTA VACIO </h1>
        </div>
    )
    )}

export default CartView
