import '../App.css'
import Contacto from '../components/contacto';
import ItemListContainer from '../components/itemListContainer'
import NavBar from '../components/navBar'
import SobreNosotros from '../components/sobreNosotros';
import ItemDetailContainer from '../containers/itemDetailContainer'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/sobreNosotros" element={<SobreNosotros/>} />
            </Routes>
        </BrowserRouter >
    )
}
export default Router
