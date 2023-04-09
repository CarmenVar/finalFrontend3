import React from 'react';
import { useAppContext } from '../context/AppContext';
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome";
import { faMoon } from"@fortawesome/free-solid-svg-icons";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { changeTheme } = useAppContext();

  return (
   
    <header>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h3>DH Odonto</h3>
      <a href='/'>Home</a>
      <a href='/favs'>Favs</a>
      <a href='/contacto'>Contacto</a>
      <button onClick={changeTheme}> 
      <FontAwesomeIcon icon= {faMoon} />
        </button>
    </nav>
    </header>
  );
};

export default Navbar;