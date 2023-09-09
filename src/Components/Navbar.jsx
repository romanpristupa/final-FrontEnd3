import React, {useState} from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  //   // Definir un estado para el tema actual
  //   const [theme, setTheme] = useState('light');

  //    // Función para cambiar el tema
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  //   // Estilo condicional basado en el tema
  //   const navbarStyle = {
  //     backgroundColor: theme === 'dark' ? 'black' : 'white',
  //     color: theme === 'dark' ? 'white' : 'black',
  //   };

  return (
    <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/detail">Detalles</Link></li>
          <li><Link to="/favs">Favoritos</Link></li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button >Change theme</button>
    </nav>
  )
}

export default Navbar