import React from 'react';
import icon1 from '../imagenes/fb icon.svg'
import icon2 from '../imagenes/Ellipse 5 copy 3.svg'
import icon3 from '../imagenes/twt icon.svg';
import img4 from '../imagenes/insta icon.svg';
import '../css/footer.css'

function Footer(){
    return(
        <div> 
            <div>
                <footer className="mainFooter">
                    <table className="mainTable">
                        <tr>
                            <th>¿Como ayudamos?</th>
                            <th>Conocernos</th>
                            <th>Unete a la comunidad</th>
                            <th>Siguenos</th>
                        </tr>

                        <tr>
                            <td>Minoristas</td>
                            <td>Acerca de</td>
                            <td>Proximos Eventos</td>
                            <td><img src={icon1} alt="iconFace"/>Facebook</td>
                        </tr>

                        <tr>
                            <td>Diseñadores de Interiores</td>
                            <td>Politicas</td>
                            <td>Convierte en un Comprador</td>
                            <td><img src={icon2} alt="iconPri"/>Pinterest</td>
                        </tr>

                        <tr>
                            <td>Diseñadores de Productos</td>
                            <td>Crreras</td>
                            <td>Convierte en un Vendedor</td>
                            <td><img src={icon3} alt="iconTwitter"/>Twitter</td>
                        </tr>

                        <td>mayoristas / importadores</td>
                        <td>Prensa</td>
                        <td></td>
                        <td><img src={img4} alt="iconInstragram"/>Instragram</td>
                    </table>
                    <br/>
                    <hr/>
                    <br/>
                <p>2016 Uimint.com</p>
                <p>Terminos & Condiciones</p>
                <p>Privacidad</p>
                </footer>
               
            </div>
        </div>
    )
}

export default Footer;

