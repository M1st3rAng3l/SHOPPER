import React from 'react'
import ImgBaner from '../imagenes/place1.png';
import '../css/banner.css'

function Banner(){
    return(
        <div>
            <div className="mainBanner">
                <img src={ImgBaner} alt="banner" className="imgBanner"/>
                <div className="subBox">
                <h2 className="eslogan">Nosotros tenemos sueños para conectar a la mayoria a los Clientes independientes</h2>
                <br/>
                <button type="submit" className="btnExplore">Explorar</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;