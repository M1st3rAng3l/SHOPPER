import React from 'react';
import MODAL from './modal2';
import useModal from './useModal';
import '../css/modal.css';

function Window(){

    const {isShowing, toggle} = useModal();
    return(
       <div>
            <div>
            <button className="buttonModal" onClick={toggle}>INICIAR SESIÓN</button>
            <MODAL isShowing={isShowing} hide={toggle}></MODAL>
        </div>
       </div>
    )
}

export default Window;