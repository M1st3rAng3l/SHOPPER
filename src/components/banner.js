import React from 'react'
import ImgBaner from '../imagenes/Rectangle 3.png';
import '../css/banner.css'

function Banner(){
    return(
        <div>
            <div className="mainBanner">
                <img src={ImgBaner} alt="banner" className="imgBanner"/>
                <div className="subBox">
                <h2 className="eslogan">Nosotros tenemos sueños para connectar a la mayoria a los Clientes independientes</h2>
                <button type="submit" className="btnExplore">Explora</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;