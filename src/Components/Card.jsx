import React, { useState, useEffect } from "react";
import { useTheme } from "./GlobalContext";

const Card = () => {
  const { doctores } = useTheme();
  const [favoritos, setFavoritos] = useState([]);

  const obtenerFavoritosDesdeLocalStorage = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
  };

  useEffect(() => {
    obtenerFavoritosDesdeLocalStorage();
  }, []);

  const addFav = (e, id) => {
    e.preventDefault();
    const doctor = doctores.find((doctor) => doctor.id === id);

    if (doctor && !favoritos.some((fav) => fav.id === doctor.id)) {
      const nuevosFavoritos = [...favoritos, doctor];
      setFavoritos(nuevosFavoritos);

      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    }
  };

  return (
    <div className="card-body">
      {doctores.map((doctor) => (
        <div key={doctor.id} className="card">
          <img src="./images/doctor.jpg" alt="Foto Doctor Generica" />
          <h3>{doctor.username}</h3>
          <h4>{doctor.name}</h4>
          <button
            onClick={(e) => addFav(e, doctor.id)}
            className={`favButton ${favoritos.some((fav) => fav.id === doctor.id) ? "active" : ""}`}
          >
            {favoritos.some((fav) => fav.id === doctor.id) ? "Remove fav" : "Add fav"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;


