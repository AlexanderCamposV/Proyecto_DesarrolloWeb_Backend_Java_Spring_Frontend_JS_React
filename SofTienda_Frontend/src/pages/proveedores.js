import React, { Component } from 'react';
import { ProveedoresService } from '../service/ProveedoresService.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';
import Header from '../components/header';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../static/css/common.css';

export default class Proveedores extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      dialogTitle: "",
      proveedor: {
        nitproveedor: null,
        nombre: null,
        direccion: null,
        telefono: null
      },
      selectedProveedor : {

      }
    };
    this.items = [
      {
        label : 'Nuevo',
        icon  : 'pi pi-fw pi-plus',
        command : () => {this.showSaveDialog()}
      },
      {
        label : 'Editar',
        icon  : 'pi pi-fw pi-pencil',
        command : () => {this.showEditDialog()}
      },
      {
        label : 'Eliminar',
        icon  : 'pi pi-fw pi-trash',
        command : () => {this.delete()}
      }
    ];
    this.ProveedoresService = new ProveedoresService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.ProveedoresService.getAll().then(data => this.setState({Proveedores: data}))
  }

  save() {
    this.ProveedoresService.save(this.state.proveedor).then(data => {
      this.setState({
        visible : false,
        proveedor: {
        nitproveedor: null,
        nombre: null,
        direccion: null,
        telefono: null
        }
      });
      this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
      this.ProveedoresService.getAll().then(data => this.setState({Proveedores: data}))
    })
  }

  delete() {
    
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.ProveedoresService.delete(this.state.selectedProveedor.nitproveedor).then(data => {
        this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.ProveedoresService.getAll().then(data => this.setState({Proveedores: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Header />
        <Menubar model={this.items}/>
        <br/>
        <Panel header="Proveedores">
            <DataTable value={this.state.Proveedores} paginator={true} rows="5" selectionMode="single" selection={this.state.selectedProveedor} onSelectionChange={e => this.setState({selectedProveedor: e.value})}>
              <Column field="nitproveedor" header="NIT"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="direccion" header="Dirección"></Column>
              <Column field="telefono" header="Teléfono"></Column>
              
            </DataTable>
        </Panel>
        <Dialog header={this.state.dialogTitle} visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="proveedor-form">

              <span className="p-float-label">
                <InputText value={this.state.proveedor.nitproveedor} style={{width : '100%'}} id="nitproveedor" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let proveedor = Object.assign({}, prevState.proveedor);
                        proveedor.nitproveedor = val;

                        return { proveedor };
                    })}
                  } />
                <label htmlFor="nitproveedor"> Número NIT</label>
              </span>
              <br/>
              
              <span className="p-float-label">
                <InputText value={this.state.proveedor.nombre} style={{width : '100%'}} id="nombre" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let proveedor = Object.assign({}, prevState.proveedor);
                        proveedor.nombre = val

                        return { proveedor };
                    })}
                  } />
                <label htmlFor="nombre">Nombre</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.proveedor.direccion} style={{width : '100%'}} id="direccion" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let proveedor = Object.assign({}, prevState.proveedor);
                        proveedor.direccion = val

                        return { proveedor };
                    })}
                  } />
                <label htmlFor="direccion">Dirección</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.proveedor.telefono} style={{width : '100%'}} id="telefono" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let proveedor = Object.assign({}, prevState.proveedor);
                        proveedor.telefono = val

                        return { proveedor };
                    })}
                  } />
                <label htmlFor="telefono">Teléfono</label>
              </span>
              <br/>

              <br/>

                           
            </form>
        </Dialog>
        <Growl ref={(el) => this.growl = el} />
      </div>
    );
  }

  showSaveDialog(){
    this.setState({
      visible : true,
      dialogTitle: "Crear Proveedor",
      proveedor : {
        nitproveedor: null,
        nombre: null,
        direccion: null,
        telefono: null
       
      }
    });
    document.getElementById('proveedor-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      dialogTitle: "Editar Proveedor",
      proveedor : {
        nitproveedor: this.state.selectedProveedor.nitproveedor,
        nombre: this.state.selectedProveedor.nombre,
        direccion: this.state.selectedProveedor.direccion,
        telefono: this.state.selectedProveedor.telefono
       
        
      }
    })
  }
}
