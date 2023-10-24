import React from "react";
import { useLocation} from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram, BiLogoGmail, BiLogoWhatsapp, BiCaretRight, BiCaretDown } from "react-icons/bi";
import "./HyFJoubert.css";
import { NavLink, Link } from "react-router-dom";
import useSubmenu from "./useSubmenu";

export default function HyFJoubert(props) {
  const paginas = [
    {
      src: "/Productos",
      h1: "Productos"
    },
    {
      src: "/Carrito",
      h1: "Carrito"
    },
    {
      src: "/Colores",
      h1: "Auxiliar Colores"
    }
  ];

  // Ayuda a determinar en pagina se esta, con esta información se cambia el titulo
  let location = useLocation();
  let locationBase = "/"+location.pathname.split('/')[1]
  const currentPagina = paginas.find((pagina) => pagina.src === locationBase);

  // ayuda a controlar display sub Menu
  const [submenu1, setSubmenu1] = useSubmenu()
  const [submenu2, setSubmenu2] = useSubmenu()

  return (
    <>
      <header className="header">

        <Link to="/"><h1> Tienda Joubert {
          locationBase == '/Marca' ? (<span className="h1extra"> . {location.pathname.split('/')[2]} </span>) : (
            currentPagina ? (<span className="h1extra"> . {currentPagina.h1}</span>) : "")
        }</h1></Link>

        <div className="navB">
          <nav className="nav">
            <ul>
              <li className="navLi"><NavLink to="/">Inicio</NavLink></li>
              <li className="navLi"><NavLink to="/Productos">Productos</NavLink></li>
              <li className="despLi">
                <button className="elementoDesplegable" onClick={setSubmenu1}>Marcas{submenu1 ? <BiCaretDown/>: <BiCaretRight/>}</button>
                <ul className={"navAnidado " + (submenu1 ? "": "esconder")}>
                  <li className="navLi"><NavLink to="/Marca/CarolinaHerrera">Estee Lauder</NavLink></li>
                  <li className="navLi"><NavLink to="/Marca/JuanitaJo">Prune</NavLink></li>
                  <li className="navLi"><NavLink to="/Marca/Ernesto">Ernesto</NavLink></li>
                </ul>
              </li>
              <li className="despLi">
                <button className="elementoDesplegable" onClick={setSubmenu2}>Tipo{submenu2 ? <BiCaretDown/>: <BiCaretRight/>}</button>
                <ul className={"navAnidado " + (submenu2 ? "": "esconder")}>
                  <li className="navLi"><NavLink to="/Tipo/Bandolera">Bandolera</NavLink></li>
                  <li className="navLi"><NavLink to="/Tipo/Bolso">Bolso</NavLink></li>
                  <li className="navLi"><NavLink to="/Tipo/Cartera">Cartera</NavLink></li>
                </ul>
              </li>
              <li className="navLi"><NavLink to="/Colores">Colores</NavLink></li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </header>

      <section className="cuerpo">{props.children}</section>

      <footer className="footer">
        <p className="title">Tienda Joubert</p>
        <p className="descrip">Practicando hacer una tienda en REACT</p>
        <div className="social-links">
          <a href="https://wa.me/5493541613185?text=Hola.%20Me%20gustaría%20contactarme%20contigo" target="_blank" rel="noreferrer">
            <BiLogoWhatsapp/>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BiLogoFacebook/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BiLogoInstagram/>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <BiLogoLinkedin/>
          </a>
          <a href="mailto:gustavo.sirtori@gmail.com" target="_blank" rel="noreferrer">
            <BiLogoGmail/>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()+" - "}
          <strong>  Sirtori Gustavo</strong>. Todos los derechos
          reservados
        </div>
      </footer>
    </>
  );
}
