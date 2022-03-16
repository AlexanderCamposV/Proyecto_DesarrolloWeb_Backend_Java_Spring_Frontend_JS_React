import React, { useEffect } from "react"
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router'
import "./logout.css"

const Logout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleClick = () => {
    cerrarSesion()
  }

  const cerrarSesion = () => {
    cookies.remove('id', { path: "/" });
    cookies.remove('email', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('password', { path: "/" });
    cookies.remove('username', { path: "/" });
    redirect()
  }

  const redirect = () => {
    navigate("/");
  }

  useEffect(() => {
    if(!cookies.get('username')){
        redirect()
    }
  }, [])

  return (
    <button className="btn-logout" onClick={handleClick}>Cerrar sesión</button>
  )
}

export default Logout