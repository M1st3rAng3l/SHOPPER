import React, { useState } from "react";
import img1 from "../imagenes/Logo.png";
import img2 from "../imagenes/close icon@2x.png";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <img src={img1} alt="imgLogo" />
        <img src={img2} alt="imgCloseX" />
      </div>

      <form>
        <input
          type="text"
          placeholder="Nombre de Usuario / Correo Electronico"
        />
        <input type="text" placeholder="Contraseña" />
        <input tyte="checkbox" placeholder="mantenme registrado" />
        <button>¿Olvidaste tu Contraseña</button>
      </form>

      <form>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />{" "}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
