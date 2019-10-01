import React from "react";
import imgB from "../imagenes/buyer.png";
import imgV from "../imagenes/seller.png";
import '../css/description.css';

function Description() {
  return (
    <div>
      <div className="mainBoxClient">

        <div className="sectionBuyer">
          <h2>¿Por qué convertirse en Comprador</h2>
          <br />
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <br/>
          <button>Aplicar para Comprar</button>
          <img src={imgB} alt="imgBuyer"/>
        </div>

        <div className="sectionSeller">
          <img src={imgV} alt="imgSeller"/>
          <h2>¿Por qué convertirse en Vendedor?</h2>
          <br/>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <br/>
          <button>Aplicar para Vender</button>
        </div>

      </div>

    </div>
  );
}
export default Description;
