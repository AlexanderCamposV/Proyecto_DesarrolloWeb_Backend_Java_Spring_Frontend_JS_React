import React, { Component } from 'react';
import { ConsolidadoService } from '../service/ConsolidadoService.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';
import Header from '../components/header';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../static/css/consolidado.css';


export default class Consolidado extends Component{
  constructor(){
    super();
    this.state = {
      consolidado: [],
      selectedConsolidado : {}
    };
    
    this.ConsolidadoService = new ConsolidadoService();

    this.sumar = this.sumar.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
    this.totalTemplate = this.totalTemplate.bind(this);
  }

  formatCurrency(value) {
      return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  totalTemplate(rowData) {
      return `${this.formatCurrency(rowData.totalventas)}`;
  }

  sumar() {
    const total = this.state.consolidado
      .map(ciudad => ciudad.totalventas)
      .reduce((sum, a) => sum + a, 0)

    this.setState({
      totalventas: this.formatCurrency(total)
    })
  }

  componentDidMount(){
    this.ConsolidadoService.getAll()
      .then(data => this.setState({consolidado: data}))
      .then(data => { this.sumar() })
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Header />
        <Panel header="Total de Ventas por Ciudad">
            <DataTable value={this.state.consolidado} selectionMode="single" selection={this.state.selectedProducto}>
              <Column field="id" header="ID"></Column>
              <Column field="ciudad" header="Ciudad"></Column>
              <Column field="totalventas" header="Ciudad Ventas" body={this.totalTemplate}></Column>
            </DataTable>
            <div className="total">
                <p>Total Ventas Tienda <strong>{this.state.totalventas}</strong></p>
            </div>
        </Panel>
      </div>
    );
  }
}
