import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id, showButton}) => {
  const navigate = useNavigate();

  const addFav = ()=>{
    let value: [] = [];
    if (sessionStorage.getItem("token")) {
      value = JSON.parse(sessionStorage.getItem("token"));
      value.push({ id, name, username });
      sessionStorage.setItem("token", JSON.stringify(value));
      console.log(value);
    } else {
      sessionStorage.setItem("token", JSON.stringify([{ id, name, username }]));
    }
  }; // Aqui iria la logica para agregar la Card en el localStorage
  const selectItem = () => {
    navigate(`/home/detail/${id}`);
  };

  return (
    <div className="card">
      <div
        onClick={selectItem}>
          <img src="./images/doctor.jpg" 
          alt="DH-logo" />
      
        {/* En cada card deberan mostrar en name - username y el id */}
      <h3>{name}</h3>
      <h3>{username}</h3>
      <p>{id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </div>
        {showButton && (
          <button onClick={addFav} className="favButton">
          Add fav
          </button>
        )}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;