import React from "react";
import iconTop from "../imagenes/Top Seller.png";
import bike from "../imagenes/bicicleta.png";
import mueble from "../imagenes/mueble2.png";
import glass from "../imagenes/lentes.png";
import tech from "../imagenes/tech.png";
import "../css/topSeller.css";

function TopSeller() {
  const products = [
    {
      id: "01",
      name: "MERRY´S Cat Eye Sunglasses Women",
      price: "125.00",
      supplier: "Colbat Union",
      description: "Son lentes de sol para mujeres ",
      quantity: "100",
      imagen: glass
    },
    {
      id: "02",
      name: "SAVA DESCK300 Mountain Bike 29",
      price: "1400.00",
      supplier: "Cyrsshare",
      description: "Una bicileta para ir en cualquier terreno montañosa",
      quantity: "10",
      imagen: bike
    },
    {
      id: "03",
      name: "Premium Wood Luna Bench",
      price: "355.00",
      supplier: "Cobind pvt.",
      description: "Un bello banco para exteriores ",
      quantity: "10",
      imagen: mueble
    },
    {
      id: "04",
      name: "Hardware Mini",
      price: "555.00",
      supplier: "Intel Tech",
      description: "Un minidispositivo",
      quantity: "10",
      imagen: tech
    }
  ];

  return (
    <div>
      <div className="mainBox1">
        <div className="">
          <img src={iconTop} alt="iconTitle" />
        </div>
        {products.map((e, index) => (
          <div key={index} className="dataBox">
            <img src={e.imagen} alt="imgItem" className="imgItem" />
            <p className="text">{e.name}</p>
            <p className="text">${e.price}</p>
            <p className="text">{e.supplier}</p>
            <p className="text">{e.description}</p>
          </div>
        ))}
         <p>EXPLORAR MAS</p>
      </div>
     
    </div>
  );
}

export default TopSeller;
