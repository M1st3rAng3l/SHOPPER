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
                            <th>Cómo ayudamos</th>
                            <th>Conocernos</th>
                            <th>Unete a la comunidad</th>
                            <th>Síguenos</th>
                        </tr>

                        <tr>
                            <td>Minoristas</td>
                            <td>Acerca de</td>
                            <td>Próximos Eventos</td>
                            <td><img src={icon1} alt="iconFace"/>Facebook</td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><img src={icon2} alt="iconPri"/></td>
                        </tr>
                    </table>
                </footer>
            </div>
        </div>
    )
}

export default Footer;

