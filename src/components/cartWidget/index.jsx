import "./styleCarrito.css"

const CartWidget = () => {
    return (
        <div className="App">
            <li className="nav-item imgCarrYCont">
                <button className="carrito"></button>
                <span className="contadorCarrito">0</span>
            </li>
        </div>
    )
}
export default CartWidget