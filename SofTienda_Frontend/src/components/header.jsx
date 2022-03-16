import React from "react"
import Nav from "./nav"
import Logout from "./logout"
import Logo from "../static/images/logo.png"

import "./header.css"

const Header = () => (
  <header className="app-header">
    <Nav />
    <Logout />
    <img className="app-logo" src={Logo} alt="" />
  </header>
)

export default Header
