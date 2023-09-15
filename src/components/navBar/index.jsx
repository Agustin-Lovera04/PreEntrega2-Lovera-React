import logoRugby from "/imagenes/logo_transparent.png"
import CartWidget from "../cartWidget"
import "./styleNavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="App">
      <header className="App header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <li className="nav-item lgYTit">
              <Link to="/"><img src={logoRugby} className="logoStyle" alt="" /></Link>
            </li>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link active text-light" aria-current="page" >Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sobreNosotros" className="nav-link active text-light" aria-current="page">Sobre Nosotros</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/" className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</Link>
                  <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/category/botines">BOTINES</Link>
                    <Link className="dropdown-item" to="/category/indumentaria">INDUMENTARIA</Link>
                    <Link className="dropdown-item" to="/category/accesorios">ACCESORIOS</Link>
                    <Link className="dropdown-item" to="/category/pelotas">PELOTAS</Link>
                    <li><hr className="dropdown-divider" /></li>
                    <Link className="dropdown-item" to="/">VER TODOS</Link>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <CartWidget />
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar