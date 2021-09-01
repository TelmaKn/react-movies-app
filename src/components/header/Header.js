import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>Mis peliculas</Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Para ver</Link>
            </li>
            <li>
              <Link to='/watched'>Vistas</Link>
            </li>
            <li>
              <Link to='/add' className='btn'>
                + Agregar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
