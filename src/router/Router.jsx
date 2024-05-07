import '../App.css'
import CartView from '../components/cartView/cartView';
import ItemListContainer from '../components/itemListContainer'
import NavBar from '../components/navBar'
import ItemDetailContainer from '../containers/itemDetailContainer'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { CartComponentContext } from '../context/cartContext';
import Order from '../components/order/order';

const Router = () => {
    return (
        <CartComponentContext>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/ProyectoFinal-Lovera-React/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/order" element={<Order/>}/>                
                </Routes>
            </BrowserRouter>
        </CartComponentContext>
    )
}
export default Router
