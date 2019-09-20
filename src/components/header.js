import React from "react";
import "../css/header.css";
import logo1 from "../imagenes/Cart icon.svg";
import logo2 from "../imagenes/shortlist icon.svg";

function HeaderOne() {
  return (
    <div>
      <div className="headerBox">

        <div className="titleBox">
          <h1>SHOPPER</h1>
          <p>Smart Marketplace</p>
        </div>

        <div className="buscadorBox">
          <input type="text" placeholder="buscar productos" />
          <button type="submit">BUSCAR</button>
        </div>

        <div className="botonBox">
          <button>INICIAR SESION</button>
          <button>REGISTRARSE</button>
        </div>
        <div className="imagenBox">
          <img src={logo2} alt="icon1" />
          <img src={logo1} alt="logo2" />
        </div>
      </div>

      <nav className="navbarBox">
        <ul>
          <li>Decoración del hogar</li>
          <li>Muebles</li>
          <li>Luces</li>
          <li>Acentos caseros</li>
          <li>Alfombras</li>
          <li>Exteriores</li>
          <li>Vacaiones</li>
          <li>Regalos</li>
          <li>Eventos</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderOne;
