import React, { useState } from "react";
import img1 from "../imagenes/bicicleta.png";
import img2 from "../imagenes/joya.png";
import img3 from "../imagenes/mueble.png";
import img4 from "../imagenes/maquillaje.png";
import left from "../imagenes/left.png";
import right from "../imagenes/right.png";
import "../css/carousel.css";

function Carousel() {
  const images = [img1, img2, img4, img3];
  const [currentImage, setcurrentImage] = useState(0);

  function prevIMage() {
    //averiguar si currentImage es igual a 0 y si el usuario alcanzó el comienzo del carrusel
    const resetToVeryBack = currentImage === 0;
    const index1 = resetToVeryBack ? images.length - 1 : currentImage - 1;

    // asigna el índice lógico al índice de imagen actual que se usará en el método de representación
    setcurrentImage(index1);
  }

  function nextImage() {
    // verifica si necesitamos comenzar desde el primer índice
    const resetIndex = currentImage === images.length - 1;
    const index2 = resetIndex ? 0 : currentImage + 1;
    setcurrentImage(index2);
  }

  // crea una nueva matriz con 4 elementos de las imágenes de origen
  const ImageSources = images.slice(currentImage, currentImage + 4);

  // verifica la longitud de la nueva matriz (es menor que 4 cuando el índice está al final de la matriz de fuentes imaginarias)
  const imageSourcesToDisplay =
    ImageSources.length < 4
      ? // si la longitud de imageSourcesToDisplay es inferior a 4 imágenes que añaden las imágenes que faltan desde el comienzo de la matriz original
        [...ImageSources, ...images.slice(0, 4 - ImageSources.length)]
      : ImageSources;

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
        {imageSourcesToDisplay.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="imagesCollection"
            className="imgCollection"
          />
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
