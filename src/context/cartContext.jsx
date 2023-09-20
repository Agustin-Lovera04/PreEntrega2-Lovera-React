import { createContext, useState } from "react"


export const CartContext = createContext()

export const CartComponentContext = ( { children } ) => {
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find((articulo) => articulo.id === id)
    }
 
    const addToCart= (articulo, cantidad) => {
        const id = articulo.id
        const index = cart.findIndex((articulo) => articulo.id === id)
        if (index !== -1) {
          cart[index].cantidad += cantidad
          setCart([...cart])
        } else {
          articulo.cantidad = cantidad
          setCart([...cart, articulo])
        }
      }

      const removeArticulo = (id) => {
        const actRemoveCart = cart.filter((product) => product.id !== id)
        setCart(actRemoveCart)
      }
      
      const restarCantidadInCart = (id) => {
        const modCart = [...cart]
        const articulo = modCart.find((a) => a.id === id)
      
        if (articulo && articulo.cantidad > 1) {
          articulo.cantidad -= 1
          setCart(modCart)
        }
      }

      const sumarCantidadInCart = (id, cantidad) => {
        const modCart = [...cart]
        const articulo = modCart.find((a) => a.id === id)
      
        if (articulo) {
          articulo.cantidad += cantidad
          setCart(modCart)
        }
      }
      
      const contadorCarrito = () => {
        const contador = cart.length
        return contador
      }

      const totalPriceCart = cart.reduce((acumulador, articulo) => acumulador + (articulo.price * articulo.cantidad), 0)

    const contextValue = {
        clearCart, addToCart, isInCart, removeArticulo, restarCantidadInCart, sumarCantidadInCart, contadorCarrito, totalPriceCart, cart, setCart
    } 

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
