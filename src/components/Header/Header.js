import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home" activeClassName="bg-white text-dark" activeStyle={{ border: '2px solid orange' }}>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="bg-white text-dark" activeStyle={{ border: '2px solid orange' }}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="bg-white text-dark" activeStyle={{ border: '2px solid orange' }}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" activeClassName="bg-white text-dark" activeStyle={{ border: '2px solid orange' }}>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="bg-white text-dark" activeStyle={{ border: '2px solid orange' }}>Login</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Hook
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/usestate">UseState</NavLink>
                <NavLink className="dropdown-item" to="/useeffect">UseEffect</NavLink>
                <NavLink className="dropdown-item" to="/hookredux">Demo fake book</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                API
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/class-api">Class Api</NavLink>
                <NavLink className="dropdown-item" to="/function-api">Function Api</NavLink>
              </div>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    )
  }
}
