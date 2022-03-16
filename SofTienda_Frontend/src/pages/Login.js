import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Cookies from 'universal-cookie';

import Logo from '../static/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/login.css';

// Acá creamos un login con estado vacio para ser llenado mas adelante cuando el usuario ingrese la información. 
const Login = () => {
    const baseUrl = "http://localhost:8080/usuarios/";
    const cookies = new Cookies();
    
    const [state, setState] = useState({
        form:{
            username: '',
            password: ''
        }
    });

    const navigate = useNavigate();

    const handleChange = async e => {
        await setState({
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleClick = async e => {
        e.preventDefault();
        
        const isLogged = await iniciarSesion();
        
        if (isLogged) {
            redirect();
        }
    }
    
    const redirect = () => {
        navigate("/clientes");
    }

    const decryptPassword = encryptedPassword => {
        const bytes = CryptoJS.AES.decrypt(encryptedPassword,'clave');
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedPassword;
    }

    // Creación del método inicia sesión. Donde el sistema comprobará si el usuario y contraseña que ingresados están la base de datos.
    const iniciarSesion = async () => {
        return axios.get(baseUrl+"listar/"+state.form.username)
            .then(response => response.data)
            .then(response =>{
                const inputPassword = state.form.password;
                const decryptedPassword = decryptPassword(response.password);

                if(inputPassword === decryptedPassword){
                    const respuesta=response;
                    cookies.set('cedula_usuario', respuesta.cedula, {path: "/"});
                    cookies.set('email_usuario', respuesta.email, {path: "/"});
                    cookies.set('nombre_usuario', respuesta.nombre, {path: "/"});
                    cookies.set('password', respuesta.password, {path: "/"});
                    cookies.set('username', respuesta.username, {path: "/"});
                    alert(`Bienvenido ${respuesta.nombre}`);
                    return true;
                }
                
                alert('El usuario o la contraseña no son correctos');
                return false;
            })
            .catch(error =>{
                console.log(error);
            })
    }

    useEffect(() => {
        if(cookies.get('username')){
            redirect();
        }
    }, [])
    

    return (
        <div className="login">
            <div className="text-center">
                <img src={Logo} className="rounded" alt="Logo tienda virtual"/>
            </div>
            <div className="container">
                <div className="login-row row justify-content-center align-items-center">
                    <div className="login-column col-md-6">
                        <div className="login-box col-md-12">
                            <form className="login-form form">
                                <h3 className="text-center text-info">Acceso al Sistema</h3>
                                <div className="form-group">
                                    <label className="text-info">Usuario: </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info">Contraseña: </label>
                                    <br />
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mt-4">
                                    <button className="btn btn-info btn-md" onClick={handleClick}>Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
