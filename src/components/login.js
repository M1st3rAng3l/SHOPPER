import React, {useState} from 'react';
import img1 from "../imagenes/Logo.png";
import img2 from "../imagenes/fb.svg";
import img3 from "../imagenes/G+.svg";
import img4 from '../imagenes/ptrst.svg';
import '../css/logSing.css';

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  

    function handleLogin(){
      console.log(email);
      console.log(password);
  
      alert('Usted ha iniciado sesión');
      
    }

    function handleSubmit(event){
      event.preventDefault();
      console.log(email);
      console.log(password);
    }


    return(
       <div>
          
           <div className="titleLogo">
        <img src={img1} alt="imgLogo"/>
      </div>

      <form className="formBox" onSubmit={handleSubmit}>
        <br/>
      <input className="inputData" value={email}  onChange={e => setEmail(e.target.value)} placeholder="Correo Electronico" type="email" name="email"required/>
        <br/>
        <input className="inputData" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contrase&#241;a"type="password"name="password" required/>
        <br/>
        
        <div>
        <label><input type="checkbox" />Mantenme conectado</label>
        <br/>
        <p>¿Olvidaste la contraseña?</p>
        </div>
        <br/>

        <div>
        <button type="submit" className="btnSubmit" onClick={handleLogin}>Iniciar Sesión</button>
        <br/>
        <button type="submit" className="btnGuest">Iniciar sesión como un invitado</button>
        <br/>
        </div>

      </form>
      <br/>

      <h5>O</h5>
      <br/> 
        <br/>
        <h3>Registrarse con:</h3>
        <br/>
      <div className="socialWeb">   
      <br/>
      <img src={img2} alt="icon2"/>
      <br/>
        <img src={img3} alt="icon3"/>
        <br/>
        <img src={img4} alt="icon5"/>
        <br/>
      </div>
      
      <br/>

      <div className="extras">
        <br/>
        <button className="openAccount">&#191;Ya tienes una cuenta?</button>
        <button className="login">Iniciar Sesi&#243;n</button>
        <br/>

      </div>
    </div>
    )
}

export default Login;
