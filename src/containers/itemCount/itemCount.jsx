import { useState } from "react"
import "./styleitemCount.css"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div>
                <h4>items: {count}</h4>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger m-1  countBtn" onClick={restar}>-</button>
                    <button className="btn btn-success m-1 countBtn" onClick={sumar}>+</button>
                </div>
            </div>
        </div>
    )

}
export default ItemCount