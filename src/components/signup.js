import React, { useState } from "react";
import img1 from "../imagenes/Logo.png";

import img4 from "../imagenes/fb.svg";
import img5 from "../imagenes/G+.svg";
import img7 from '../imagenes/ptrst.svg';

function SignUp() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(userName)
  console.log(fullName);
  console.log(email);
  console.log(password);

  return (
    <div>
      <div className="">
        <img src={img1} alt="imgLogo" />
      </div>

      <form>
        <input
        className="inputData"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder="Nombre de Usuario"
          type="text"
          name="userName"
          required
        />
        <input
        className="inputData"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          placeholder="Nombre Completo"
          type="text"
          name="fullName"
          required
        />{" "}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Correro Electronico"
          type="email"
          name="email"
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contrase&#241;a"
          type="password"
          name="password"
          required
        />
        <button type="submit">Crear Cuenta</button>
      </form>

      <h5>O</h5>

      <div>
        <h3>Registrarse con:</h3>
        <img src={img4} alt="icon2"/>
        <img src={img5} alt="icon3"/>
        <img src={img7} alt="icon5"/>
      </div>

      <div>
        <button>&#191;Ya tienes una cuenta?</button>
        <button>Iniciar Sesi&#243;n</button>
      </div>
    </div>
  );
}

export default SignUp;
