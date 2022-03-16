import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './nav.css'

class Nav extends Component {
  constructor() {
    super()
    this.items = [
      {
        to: "/clientes",
        text: "Clientes"
      },
      {
        to: "/proveedores",
        text: "Proveedores"
      },
      {
        to: "/productos",
        text: "Productos"
      },
      {
        to: "/usuarios",
        text: "Usuarios"
      },
      {
        to: "/ventas",
        text: "Ventas"
      },
      {
        to: "/reportes",
        text: "Reportes"
      },
      {
        to: "/consolidado",
        text: "Consolidación"
      }
    ]
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          {this.items.map(item => (
            <li className="nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav
