import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  
  return (
      <div className="navbar">
          <nav >
            <div className='naoky'>
                <h3>BY NAOKY</h3>
                <img className='logo' src='/images/logo.png'/>
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
          <button className='tema'>Change</button>
          </nav>
      </div>
  )
}

export default Navbar