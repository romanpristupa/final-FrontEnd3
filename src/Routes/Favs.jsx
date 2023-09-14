import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  const obtenerFavoritosDesdeLocalStorage = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
  };

  useEffect(() => {
    obtenerFavoritosDesdeLocalStorage();
  }, []);

  return (
    <div>
    <h1>Dentistas Favoritos</h1>
    <div className="card-grid">
      {favoritos.map((doctor) => (
        <div key={doctor.id} className="card">
          <img src="./images/doctor.jpg" alt="Foto Doctor Generica" />
          <h3>{doctor.username}</h3>
          <h4>{doctor.name}</h4>
          <button
            //onClick={(e) => delFav(e, doctor.id)}
            className={`favButton ${favoritos.some((fav) => fav.id === doctor.id) ? "active" : ""}`}
          >
            {favoritos.some((fav) => fav.id === doctor.id) ? "Remove fav" : "Add fav"}
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Favs;
