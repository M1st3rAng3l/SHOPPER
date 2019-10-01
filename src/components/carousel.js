import React, { useState } from "react";
import img1 from "../imagenes/bicicleta.png";
import img2 from "../imagenes/joya.png";
import img3 from "../imagenes/mueble.png";
import img4 from "../imagenes/maquillaje.png";
import img5 from "../imagenes/tech.png";
import left from "../imagenes/left.png";
import right from "../imagenes/right.png";
import "../css/carousel.css";

function Carousel() {
  const categories = [
    { id: "00", name: "Joyeria", image: img2 },
    { id: "01", name: "Muebles", image: img3 },
    { id: "02", name: "Maquillaje", image: img4 },
    { id: "03", name: "Equipo Deportivo", image: img1 },
    { id: "04", name: "Hardware", image: img5 }
  ];

  const [currentCategory, setcurrentCategory] = useState(0);

  function prevIMage() {
    //averiguar si currentCategory es igual a 0 y si el usuario alcanzó el comienzo del carrusel
    const resetToVeryBack = currentCategory === 0;
    const index1 = resetToVeryBack
      ? categories.length - 1
      : currentCategory - 1;

    // asigna el índice lógico al índice de imagen actual que se usará en el método de representación
    setcurrentCategory(index1);
  }

  function nextImage() {
    // verifica si necesitamos comenzar desde el primer índice
    const resetIndex = currentCategory === categories.length - 1;
    const index2 = resetIndex ? 0 : currentCategory + 1;
    setcurrentCategory(index2);
  }

  // crea una nueva matriz con 4 elementos de las imágenes de origen
  const categorySources = categories.slice(
    currentCategory,
    currentCategory + 4
  );

  // verifica la longitud de la nueva matriz (es menor que 4 cuando el índice está al final de la matriz de fuentes imaginarias)
  const imageSourcesToDisplay =
    categorySources.length < 4
      ? // si la longitud de imageSourcesToDisplay es inferior a 4 imágenes que añaden las imágenes que faltan desde el comienzo de la matriz original
        [...categorySources, ...categories.slice(0, 4 - categorySources.length)]
      : categorySources;

  return (
    <div>
      <div className="carouselBox">
        <img
          src={left}
          alt="iconLeft"
          className="btnIcon"
          onClick={prevIMage}
        />
        {/* renderiza imagenes */}
        {imageSourcesToDisplay.map((e, index) => (
          <div key={index} className="imagenC">
            <img
              src={e.image}
              alt="imagesCollection"
              className="imgCollection"
            />
            <h3 className="titleC">{e.name}</h3>
          </div>
        ))}
        <img
          src={right}
          alt="iconRight"
          className="btnIcon"
          onClick={nextImage}
        />
      </div>
    </div>
  );
}

export default Carousel;
