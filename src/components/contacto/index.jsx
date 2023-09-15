import "./styleContacto.css"

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="contacto-header">
        <h2>¿Necesitas ayuda?</h2>
        <p>Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.</p>
      </div>
      <div className="contacto-form">
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" />
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input type="tel" id="telefono" />
          <textarea rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="contacto-info">
        <h3>Información de Contacto</h3>
        <p>Si prefieres, también puedes contactarnos directamente:</p>
        <ul>
          <li>Teléfono: +1-123-456-7890</li>
          <li>Correo Electrónico: info@rugbyshop.com</li>
        </ul>
      </div>
      <div className="contacto-buttons">
        <a href="https://www.linkedin.com/in/agustin-lovera-5b1576274/" target="_blank"><img className="imgLinkContacto" src="/public/imagenes/linkedin.png" alt="linkedin" /></a>
        <a href="https://www.instagram.com/aguslovera__/" target="_blank"><img  className="imgLinkContacto" src="/public/imagenes/instagram (1).png" alt="instagram" /></a>
        <a href="#" ><img className="imgLinkContacto" src="/public/imagenes/portfolio.png" alt="portafolio" /></a>
      </div>
    </div>
  )
}

export default Contacto
