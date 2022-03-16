import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('rol_usuario', {path: "/"});
        cookies.remove('nombre_usuario', {path: "/"});
        cookies.remove('email_usuario', {path: "/"});
        cookies.remove('username', {path: "/"});
        cookies.remove('password', {path: "/"});
        
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('rol_usuario: '+cookies.get('rol_usuario'));
        console.log('nombre_usuario: '+cookies.get('nombre_usuario'));
        console.log('email_usuario: '+cookies.get('email_usuario'));
        console.log('username: '+cookies.get('username'));
        console.log('password: '+cookies.get('password'));
        
        return (
            <div>
                Menu Principal

                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;