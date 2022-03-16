import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/inicio.css';
import Bogota from '../static/images/bogota.png';
import Medellin from '../static/images/medellin.png';
import Cali from '../static/images/cali.png';

class Inicio extends Component {
  constructor() {
    super()
    this.images = [Bogota, Medellin, Cali]
  }

  render() { 
    return (
      <div className="inicio"> 
        <h1>Bienvenido</h1>
        <h2>SofTienda</h2>
        <div className="botones">
          <h3>Selecciona tu sede</h3>
          {this.images.map(img => (
            <Link to="/login"><img src={img} /></Link>
          ))}
        </div>
      </div> 
    )
  }
}
export default Inicio;
