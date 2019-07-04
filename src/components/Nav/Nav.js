import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
  return(
    <nav>
      <NavLink to={'/'} onClick={props.reset} exact activeClassName='activeNav'>
        <span>original</span>
      </NavLink>
      <NavLink to={'/custom'} onClick={props.activate} activeClassName='activeNav'>
        <span>custom</span>
      </NavLink>
    </nav>
  )
};

export default Nav;