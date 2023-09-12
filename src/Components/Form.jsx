import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

const [error,setError] = useState(false);
const [nombre,setNombre] = useState ("");
const [email,setEmail] = useState("");

const manejadorSubmit= (e) =>{
  e.preventDefault();
  validarNombre(nombre);
  validarEmail(email);

}
function validarNombre(nombre){
  if(nombre.length < 5){
      setError(true);
  }else{
      setError(false)
  }
}

function validarEmail(email){
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  if(!regex.test(email)){
      setError(true);
  }else{
     setError(false)
  }
}

  return (
    <div>
      <form onSubmit={manejadorSubmit}>
        <input type="text" placeholder="Ingrese Su Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}  />
        <input type="mail" placeholder="Ingrese Su Mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit">Enviar Mensaje</button>
        {error && <h2 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h2>}
      </form>
    </div>
  );
};

export default Form;
