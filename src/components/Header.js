import React from 'react'
import {NavLink} from 'react-router-dom'

const Header=()=>(

    <ul className="navbar">
        <NavLink to="/" style={{color:"#fff", textDecoration:"none"}}>
          <li className="link">Home</li>
        </NavLink>
        <NavLink to="/movies" style={{color:"#fff", textDecoration:"none"}}>
        <li className="link">Movies</li>
        </NavLink>
        </ul>

)

export default Header