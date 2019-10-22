import React from "react";
import "../css/header.css";
import logo1 from "../imagenes/Cart icon.svg";
import logo2 from "../imagenes/shortlist icon.svg";
import logo3 from '../imagenes/Logo.png';
import SIGNUP from '../components/window';
import LOGIN from '../components/window2';

function HeaderOne() {

  return (
    <div>
      <div className="headerBox">

        <div className="titleBox">
          <img src={logo3} alt="logoPagina"/>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="buscar productos" className="searchBar" />
          <button type="submit" className="searchButton" >BUSCAR</button>
        </div>
        
        <div className="botonBox">
          <button className="btnUP"><LOGIN/></button>
          <button className="btnUP"><SIGNUP/></button>
        </div>
        
        <div className="iconBoton">
        <img src={logo2} alt="icon1" className="imgLogo"/>
          <img src={logo1} alt="logo2" className="imgLogo"/>
        </div>
      </div>

      <nav className="navbarBox">
        <ul className="menu">
          <li><button className="optionButton">Decoracion del hogar</button>
          <ul className="subMenu">
            <br/>
            <div className="subTitleBox">
              <h1><strong>Decoracion del Hogar</strong></h1>
              <h2 className="subText">25478 objetos</h2>
              <h1 className="slogan1">Crea y Vive tu estilo unico</h1>
              <br/>
              <hr/>
            </div>
            <br/>
            
          <li><button className="subOptionButton">Postres y Panes</button></li>
            <li><button className="subOptionButton">Ollas de Presion</button></li>
            <li><button className="subOptionButton">Herramientas de Cocina</button></li>
            <li><button className="subOptionButton">Estufas de Gas</button></li>
            <li><button className="subOptionButton">Comedor Y Servicio</button></li>
            <li><button className="subOptionButton">Tazas de Cafe</button></li>
            <li><button className="subOptionButton">Vajillas</button></li>
            <li><button className="subOptionButton">Bar y Cristaler?a</button></li>
            <li><button className="subOptionButton">Kitchen Storage</button></li>
            <li><button className="subOptionButton">Lunch Boxes</button></li>
            <li><button className="subOptionButton">Flasks & Casseroles</button></li>
            <li><button className="subOptionButton">Kitchen Containers</button></li>
            <li><button className="subOptionButton">Furniture</button></li>
            <li><button className="subOptionButton">Beds</button></li>
            <li><button className="subOptionButton">Sofas</button></li>
            <li><button className="subOptionButton">Dinig tables & Sets</button></li>
            <li><button className="subOptionButton">Mattresses</button></li>
            <li><button className="subOptionButton">Tables</button></li>
            <li><button className="subOptionButton">Chairs</button></li>
            <li><button className="subOptionButton">Bean Bags</button></li>
            <li><button className="subOptionButton">Shoe Racks</button></li>
            <li><button className="subOptionButton">TV Units & Cabinets</button></li>
            <li><button className="subOptionButton">Warddrones</button></li>
          </ul>
          </li>
          <li> <button className="optionButton">Muebles</button></li>
          <li> <button className="optionButton">Luces</button></li>
          <li> <button className="optionButton">Acentos caseros</button></li>
          <li><button className="optionButton">Alfombras</button></li>
          <li> <button className="optionButton">Exteriores</button></li>
          <li><button className="optionButton">Vacaciones</button></li>
          <li><button className="optionButton">Regalos</button></li>
          <li> <button className="optionButton">Eventos</button></li>
        
          </ul> 
      </nav>
    </div>
  );
}
export default HeaderOne;
