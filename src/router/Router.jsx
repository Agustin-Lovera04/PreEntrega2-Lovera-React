import '../App.css'
import ItemListContainer from '../components/itemListContainer'
import NavBar from '../components/navBar'
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
            </Routes>
        </BrowserRouter >
    )
}
export default Router
