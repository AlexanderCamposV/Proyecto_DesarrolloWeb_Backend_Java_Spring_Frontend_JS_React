import React, { Component } from 'react';
import { ClientesService } from '../service/ClientesService'
import { VentasService } from '../service/VentasService';
import { InputText } from 'primereact/inputtext';
import Header from '../components/header';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

export default class Ventas extends Component {
  constructor() {
    super();
    this.state = {
      nombre: null,
      venta: {
        codigo: null,
        cedula: null,
        detalleventa: [{
          cantidadproducto: null,
          codigoproducto: null,
          valortotal: null,
          valorventa: null,
          valoriva: null
        }],
        ivaventa: null,
        totalventa: null,
        valorventa: null
      },
    };
    this.ClientesService = new ClientesService();
    this.VentasService = new VentasService();
    this.save = this.save.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  save() {
    this.VentasService.save(this.state.venta).then(data => {
      this.setState({
      });
      this.toast.show({ severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.' });
      this.VentasService.getAll().then(data => this.setState({ ventas: data }))
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.darNombre();
  }

  darNombre(){
     this.ClientesService.getOne(this.state.venta.cedula).then(cliente => {
         this.setState({nombre : cliente.nombre});
     })
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <Header />
        <div className="card p-5">
          <div className="formgrid grid">
              <div className="field col">
                <label htmlFor="cedula">Cédula</label>
                <InputText value={this.state.venta.cedula} style={{ width: '100%' }} id="cedula" onChange={(e) => {
                  const val = e.target.value;
                  this.setState(prevState => {
                    let venta = Object.assign({}, prevState.venta);
                    venta.cedula = val;
                    return { venta };
                  })
                }}
                />
              </div>
              <div className="field col">
                <button onClick={this.handleClick}>Consultar</button>
              </div>
              <div className="field col">
                <label htmlFor="nombre">Nombre</label>
                <InputText value={this.state.nombre} readOnly="readonly" style={{ width: '100%' }} id="nombre" />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
