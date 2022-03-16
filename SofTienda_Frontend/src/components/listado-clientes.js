import React, { Component } from 'react';
import { ClientesService } from '../service/ClientesService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class ListadoClientes extends Component{
  constructor(){
    super();
    this.state = {
      clientes: [],
      selectedCliente : {}
    };
   
    this.ClientesService = new ClientesService();
  }

  componentDidMount(){
    this.ClientesService.getAll().then(data => this.setState({clientes: data}))
  }

  render(){
    return (
      <div>
        <Panel header="REPORTE: Lista de Clientes">
            <DataTable value={this.state.clientes} paginator={true} rows="5" selectionMode="single" selection={this.state.selectedCliente} onSelectionChange={e => this.setState({selectedCliente: e.value})}>
              <Column field="cedula" header="Cédula"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="direccion" header="Dirección"></Column>
              <Column field="telefono" header="Teléfono"></Column>
              <Column field="email" header="Email"></Column>
            </DataTable>
        </Panel>
      </div>
    );
  }
}
