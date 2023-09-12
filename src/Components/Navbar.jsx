import React from 'react';
import useContext from 'react';
import  GlobalContext from '../Components/Utils/Global.Context';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const context = useContext(GlobalContext);
  const { theme, toggleTheme } = context;

  const handleChangeTheme = () => {
      toggleTheme();
  };
    
  return (
      <div>
          <nav >
            <div className='naoky'>
                <h3>BY NAOKY</h3>
                <img className='logo' src='/images/logo.png' alt='Logo'/>
            </div>
            <div>
                <ul>          
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                      <Link to="/favs">Favoritos</Link>
                    </li>
                </ul>
            </div>
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
            <button
             onClick={handleChangeTheme} 
             style={{background: theme.background, color: theme.font }} >
             <FontAwesomeIcon icon={faMoon} /> 
             </button>
          </nav>
      </div>
  )
}

export default Navbar;