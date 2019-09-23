import React from "react";
import "../css/header.css";
import logo1 from "../imagenes/Cart icon.svg";
import logo2 from "../imagenes/shortlist icon.svg";

function HeaderOne() {
  return (
    <div>
      <div className="headerBox">

        <div className="titleBox">
          <h1 className="titleOne"><strong>SH<span>O</span>PPER</strong></h1>
          <h3 className="titleTwo">Smart Marketplace</h3>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="buscar productos" className="searchBar"/>
          <button type="submit" className="searchButton">BUSCAR</button>
        </div>

        <div className="botonBox">
          <button className="btnUP">INICIAR SESION</button>
          <button className="btnUP">REGISTRARSE</button>
          <img src={logo2} alt="icon1" className="imgLogo"/>
          <img src={logo1} alt="logo2" className="imgLogo"/>
        </div>

      </div>

      <nav className="navbarBox">

          <button className="optionButton">Decoración del hogar</button>
          <button className="optionButton">Muebles</button>
          <button className="optionButton">Luces</button>
          <button className="optionButton">Acentos caseros</button>
          <button className="optionButton">Alfombras</button>
          <button className="optionButton">Exteriores</button>
          <button className="optionButton">Vacaciones</button>
          <button className="optionButton">Regalos</button>
          <button className="optionButton">Eventos</button>
        
      </nav>
    </div>
  );
}
export default HeaderOne;
