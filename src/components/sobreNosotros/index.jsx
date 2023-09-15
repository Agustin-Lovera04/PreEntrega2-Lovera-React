import "./styleSobreNosotros.css"

const SobreNosotros = () => {
    return (
        <div className="sobre-nosotros">
                <div className="row gradient-container">
                    <div className="col-lg-6">
                            <img className="clientes-image" src="/public/imagenes/logo_transparent.png" alt="Imagen"/>
                    </div>
                    <div className="col-lg-6 fw-bolder">
                        <h2 className="text-light">Nuestros Clientes</h2>
                        <p className="text-light">
                            En cada cliente encontramos una fuente de inspiración. Cada compra que realizan es una oportunidad para superar sus expectativas y brindarles una experiencia de compra sin igual.
                        </p>
                        <p className="text-light">
                            Valoramos sus opiniones y comentarios, que nos ayudan a mejorar constantemente. Su confianza en nosotros es nuestro mayor logro, y estamos comprometidos a seguir siendo su elección preferida en compras en línea.
                        </p>
                        <p className="text-light">
                            Únase a nuestra creciente familia de clientes satisfechos y experimente la diferencia con nosotros. ¡Gracias por ser parte de nuestro éxito!
                        </p>
                    </div>
            </div>
            <footer className="footer m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content text-center">
                                <p className="text-light">2023 RugbyShop. Todos los derechos reservados.</p>
                                <ul className="list-unstyled list-inline social-links">

                                    <a href="https://www.linkedin.com/in/agustin-lovera-5b1576274/" target="_blank"><img className="imgLinkContacto" src="/public/imagenes/linkedin.png" alt="linkedin" /></a>
                                    <a href="https://www.instagram.com/aguslovera__/" target="_blank"><img className="imgLinkContacto" src="/public/imagenes/instagram (1).png" alt="instagram" /></a>
                                    <a href="#"><img className="imgLinkContacto" src="/public/imagenes/portfolio.png" alt="portafolio" /></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default SobreNosotros
