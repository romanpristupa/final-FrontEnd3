import React from "react";
import { useTheme } from "./GlobalContext";

// name, username, id

const Card = () => {
  const { doctores } = useTheme();
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {doctores.map((doctor,id) =>(
          <div key={id} className="card">
          <img src="./images/doctor.jpg" alt="Foto Doctor Generica"></img>
          <h3>{doctor.username}</h3> 
          <h4>{doctor.name}</h4>
        </div>
        ))}
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
