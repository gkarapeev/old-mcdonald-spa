import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} exact activeClassName='activeNav' tabIndex={1}>
            <span>original</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/custom'} activeClassName='activeNav' tabIndex={2}>
            <span>custom</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;