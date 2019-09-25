import React, {useState}from 'react';
import iconTop from '../imagenes/Top Seller.png'

function TopSeller() {

    const products = [
        {id:'01', name:'Lentes de Sol', precio:'125.00',distribuidora: 'Colbat Union', descripcion:'Son lentes de sol para mujeres ', cantidad:'10'},
        {id:'02', name:'Bicicleta de Montaña', precio:'1400',distribuidora: 'Colbat Union', descripcion:'Son lentes de sol para mujeres ', cantidad:'10'},
        {id:'03', name:'Lentes de Sol', precio:'125.00',distribuidora: 'Colbat Union', descripcion:'Son lentes de sol para mujeres ', cantidad:'10'},
        {id:'04', name:'Lentes de Sol', precio:'125.00',distribuidora: 'Colbat Union', descripcion:'Son lentes de sol para mujeres ', cantidad:'10'},
        {id:'05', name:'Lentes de Sol', precio:'125.00',distribuidora: 'Colbat Union', descripcion:'Son lentes de sol para mujeres ', cantidad:'10'},
    ];

    const [topSold, setTopSold] = useState(0) 
    return(
        <div>
            <div className="mainBox1">
                <div>
                    <img src={iconTop} alt="iconTitle"/>
                </div>
            </div>
        </div>
    )
    
}

export default TopSeller;

