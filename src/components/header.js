import React from 'react';
import logo1 from '../imagenes/Cart icon.svg'
import logo2 from '../imagenes/shortlist icon.svg'


function HeaderOne(){
    return(
        <div>
        <div>
           <h1>SHOPPER</h1>
           <h2>Smart Marketplace</h2>
        </div>

        <div>
            <input type="text" placeholder="buscar productos"/>
            <button type="submit">BUSCAR</button>
        </div>
        
        <div>
            <button>INICIAR SESION</button>
            <button>REGISTRARSE</button>
        </div>
        <div>
            <img src={logo2} alt="icon1"/>
            <img src={logo1} alt="logo2"/>
        </div>
        </div>
    )
}

export default HeaderOne;