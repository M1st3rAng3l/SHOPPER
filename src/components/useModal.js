import {useState} from 'react';

function ModalSignUp(){

   //Cree instancias de nuevos valores de estado isShowing y setIsShowing para almacenar el estado de vista actual del modal.
const [ isShowing, setIsShowing] = useState(false);

//Declarar una función palanca(toogle) que cambia el valor deestá mostrando ser lo contrario de lo que es actualmente
function toggle(){
    setIsShowing(!isShowing);
}
    return(
       //Devuelve el valor isShowing y la función palanca desde el hook, por lo que el componente tiene acceso a ellos.
        {
          isShowing,
          toggle
        }

    )
}

export default ModalSignUp;