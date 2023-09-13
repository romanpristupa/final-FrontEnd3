import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { useTheme } from './GlobalContext';   


function Navbar ()  {
  const { theme, toggleTheme} = useTheme();
    
  return (
      <div>
           <nav>
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
                      <Link to="/detail">Detalle</Link>
                    </li>
                    <li>
                      <Link to="/favs">Destacados</Link>
                    </li>
                </ul>
            </div>
            <button
             onClick={toggleTheme}>
             <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} /> 
             </button>
          </nav>
      </div>
    );
  }

  export default Navbar;