import React from "react";
import imgB from "../imagenes/buyer.png";
import imgV from "../imagenes/seller.png";
import '../css/description.css';

function Description() {
  return (
    <div>
      <div className="mainBoxClient">

        <div className="sectionBuyer">
          <div>
          <h2 className="ttleB">¿Por qué convertirse en Comprador</h2>
          <br/>
          <p className="textD">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <br/>
          <button className="btnBS">Aplicar para Comprar</button>
          </div>
          <br/>
        
          <div className="imagenB">
          <img src={imgB} alt="imgBuyer"/>
          </div>
        </div>
        <br/>
        <br/>

        <div className="sectionSeller">
          <img src={imgV} alt="imgSeller" className="imagenS"/>
          <div className="descS">
          <h2 className="titleS">¿Por qué convertirse en Vendedor?</h2>
          <br/>
          <p className="textD">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <br/>
          <button className="btnBS">Aplicar para Vender</button>
          </div>
          <br/>
        </div>
      </div>

      <style jsx>
        {`
        
        `}
      </style>

    </div>
  );
}
export default Description;
