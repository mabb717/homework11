import React, { Component } from 'react'
import { Link , NavLink } from 'react-router-dom'

function Nav(){
  return (
    <ul className='nav'>
      <li>
		<NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/duel'>Duel</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/pirates'>Pirates</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav
