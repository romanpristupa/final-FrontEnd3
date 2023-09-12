import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [respuesta, setRespuesta] = useState(null);

  const manejadorSubmit = (e) => {
    e.preventDefault();
    const nombreValido = validarNombre(nombre);
    const emailValido = validarEmail(email);
    if (nombreValido && emailValido) {
      setRespuesta(
        <h2 style={{ color: 'green' }}>Gracias por registrarse</h2>
      );
      
    } else {
      setRespuesta(
        <h2 style={{ color: 'red' }}>Por favor, verifica que la información sea correcta</h2>
      );
 

  }
   
  setTimeout(function(){
    setRespuesta(null); 
 }, 1000)

 
    setNombre("");
    setEmail("");
  };

  function validarNombre(nombre) {
    if (nombre.length < 5) {
      return false;
    } else {
      return true;
    }
  }

  function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <form onSubmit={manejadorSubmit}>
        <input className="input" type="text" placeholder="Ingrese Su Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input className="input" type="email" placeholder="Ingrese Su Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="button-submit" type="submit">Enviar</button>
        {respuesta}
      </form>
    </div>
  );
  }

export default Form;
