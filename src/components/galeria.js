import React from 'react';
import img1 from '../imagenes/gafasV.png';
import img2 from '../imagenes/planta.png';
import img3 from '../imagenes/mueble3.png'
import img4 from '../imagenes/bolsa.png';
import img5 from '../imagenes/cama.png';
import img6 from '../imagenes/zapato.png';
import img7 from '../imagenes/bota.png';
import img8 from '../imagenes/silla.png';
import img9 from '../imagenes/teteta.png';
import img10 from '../imagenes/tetera2.png';
import img11 from '../imagenes/anteojos.png';
import img12 from '../imagenes/playera.png';
import img13 from '../imagenes/cepillo.png';
import img14 from '../imagenes/tech.png';
import '../css/galeria.css';



function Gallery(){

    const gallery = [
        {id:'00', imagen: img1, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'01', imagen: img2, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'02', imagen: img3, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'03', imagen: img4, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'04', imagen: img5, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'05', imagen: img6, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'06', imagen: img7, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'07', imagen: img8, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'08', imagen: img9, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'09', imagen: img10, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'010', imagen: img11, distribuidora:'Sonic', name:'Gafas de Realidad Virtual', precio:'3350.55'},
        {id:'011', imagen: img12, distribuidora:'Electra', name:'Mueble Elegante Fino', precio: '1345.75'},
        {id:'012', imagen: img13, distribuidora:'BeautyMX', name:'Cepillo para el Cabello', precio:'100'},
        {id:'013', imagen: img14, distribuidora:'TechMX', name:'dispositivo SS', precio: '1300'}
    ]
    return(
        <div>
            <div className="galleryBox">
                {
                    gallery.map((e,index) =>(
                        <div key={index} className="productBox">
                          <img src={e.imagen} alt="imgProduct"/>
                          <h3 className='text'>{e.distribuidora}</h3>
                          <h3 className='text'>{e.name}</h3>
                          <h3 className='text'>${e.precio}</h3>  
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;