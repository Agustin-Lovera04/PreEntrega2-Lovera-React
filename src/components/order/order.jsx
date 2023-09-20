import { useContext } from "react"
import { useForm } from "react-hook-form"
import { CartContext } from "../../context/cartContext"
import { db } from "../../firebase/client"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import "./styleOrder.css"

const Order = () => {
    const navegate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { cart, clearCart, totalPriceCart } = useContext(CartContext)

    const onSubmit = handleSubmit((data) => {
        const order = {
            buyer: {
                name: data.nombre,
                edad: data.edad,
                dni: data.dni,
                telefono: data.telefono,
                direccion: data.direccion,
                retiro: data.retiro
            },
            articulos: cart,
            total: totalPriceCart,
        }
        const submitOrder = collection(db, "orders")
        addDoc(submitOrder, order).then(({ id }) => lanzarAlertConfirmacion(id, totalPriceCart)
        )
    })

    const lanzarAlertConfirmacion = (id, total) => {
        Swal.fire({
            title: `Total debitado: ${total}`,
            text: `Su identificador de compra es: ${id}`,
            imageUrl: '/public/imagenes/logo.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            customClass: {
                image: "img-alert"
              }
        }).then(() => { clearCart(), navegate("/") })
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Ahora completa el siguiente Formulario:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="nombre" {...register("nombre", { required: true })} />
                    {errors.nombre?.type === "required" && <p className="text-danger">El nombre es obligatorio</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="text" className="form-control" id="edad" {...register("edad", {
                        required: true,
                        validate: {
                            isNumber: (value) => !isNaN(value),
                        }
                    })} />
                    {errors.edad?.type === "required" && <p className="text-danger">La edad es obligatoria</p>}
                    {errors.edad?.type === "isNumber" && <p className="text-danger">Por favor, ingrese un número válido</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="text" className="form-control" id="dni" {...register("dni", {
                        required: true,
                        validate: {
                            isNumber: (value) => !isNaN(value),
                        }
                    })} />
                    {errors.dni?.type === "required" && <p className="text-danger">El DNI es obligatorio</p>}
                    {errors.dni?.type === "isNumber" && <p className="text-danger">Por favor, ingrese un número válido</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="telefono" {...register("telefono", {
                        required: true,
                        validate: {
                            isNumber: (value) => !isNaN(value),
                        }
                    })} />
                    {errors.telefono?.type === "required" && <p className="text-danger">El nro de Telefono es obligatorio</p>}
                    {errors.telefono?.type === "isNumber" && <p className="text-danger">Por favor, ingrese un número válido</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="direccion" {...register("direccion", { required: true })} />
                    {errors.direccion?.type === "required" && <p className="text-danger">La direccion es obligatoria</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="retiro" className="form-label">Metodo de encuentro:</label>
                    <select className="form-select" id="retiro" {...register("retiro")} >
                        <option value="RL">Retiro en local</option>
                        <option value="RE">Requiere Envio</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Order