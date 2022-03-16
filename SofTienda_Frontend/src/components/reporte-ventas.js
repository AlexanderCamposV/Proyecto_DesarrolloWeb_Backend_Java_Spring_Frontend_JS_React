import React, { Component } from 'react';
import { VentasService } from '../service/VentasService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';

import {InputText} from 'primereact/inputtext';

import axios from 'axios';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class ReporteVentas extends Component{
  constructor(){
    super();
    this.state = {
      ventas: [],
      selectedVenta : {}
    };
    this.items = [
      {
        label : 'Buscar por Cedula',
        icon  : 'pi pi-fw pi-search',
        command : () => {this.busqueda()}
      }
    ];
    this.VentasService = new VentasService();
    this.suma = this.suma.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
    this.totalTemplate = this.totalTemplate.bind(this);
    this.subtotalTemplate = this.subtotalTemplate.bind(this);
    this.ivaTemplate = this.ivaTemplate.bind(this);
  }

  componentDidMount(){
    this.VentasService.getAll()
      .then(data => this.setState({ventas: data}))
      .then(data => { this.suma() })
  }

  busqueda(){
      this.VentasService.getOne(this.state.cedula).then(data => {
        this.setState({
          ventas: data
        });
      });
  }

  formatCurrency(value) {
      return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  totalTemplate(rowData) {
      return `${this.formatCurrency(rowData.totalventa)}`;
  }

  ivaTemplate(rowData) {
      return `${this.formatCurrency(rowData.ivaventa)}`;
  }

  subtotalTemplate(rowData) {
      return `${this.formatCurrency(rowData.valorventa)}`;
  }

  suma(){
    const total = this.state.ventas
      .map(venta => venta.totalventa)
      .reduce((sum, a) => sum + a, 0)

    this.setState({
      totalventas: this.formatCurrency(total)
    })
  }

  render(){

    let footerGroup = <ColumnGroup>
    <Row>
        <Column footer="Total:" colSpan={1} footerStyle={{ textAlign: 'center' }} />
        <Column footer={this.state.totalventas} />
    </Row>
</ColumnGroup>;

    return (
      <div>
        <label htmlFor="busqueda">Digite el número de cedula a buscar: </label>
        <InputText value={this.state.cedula} style={{ width: '100%' }} id="busqueda" onChange={(e) => {
          const val = e.target.value;
          this.setState(prevState => {
            let cedula = Object.assign({}, prevState.cedula);
            cedula = val;
            return { cedula };
          })
        }}
        />
        <Menubar model={this.items}/>
        
        <br/>
        <Panel header="REPORTE: Ventas por Cliente">
            <DataTable value={this.state.ventas} paginator={true} rows="5" selectionMode="single" selection={this.state.selectedVenta} onSelectionChange={e => this.setState({selectedVenta: e.value})}>
              <Column field="codigo" header="Código Venta"></Column>
              <Column field="cedulacliente" header="Cédula Cliente"></Column>
              <Column field="valorventa" header="Subtotal" body={this.subtotalTemplate}></Column>
              <Column field="ivaventa" header="Iva Venta" body={this.ivaTemplate}></Column>
              <Column field="totalventa" header="Total Venta" body={this.totalTemplate}></Column>
            </DataTable>

            <DataTable footerColumnGroup={footerGroup} responsiveLayout="scroll">
               <Column field="totalventas" body={this.state.totalventas} />
            </DataTable>
        </Panel>
      </div>
    );
  }


}
