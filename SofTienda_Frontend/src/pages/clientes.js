import React, { Component } from 'react';
import { ClientesService } from '../service/ClientesService';
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

export default class Clientes extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      dialogTitle: "",
      cliente: {
        cedula: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null
      },
      selectedCliente : {

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
    this.ClientesService = new ClientesService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.ClientesService.getAll().then(data => this.setState({Clientes: data}))
  }

  save() {
    this.ClientesService.save(this.state.cliente).then(data => {
      this.setState({
        visible : false,
        cliente: {
        cedula: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null
        }
      });
      this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
      this.ClientesService.getAll().then(data => this.setState({Clientes: data}))
    })
  }

  delete() {
    //console.log(this.state.selectedCliente.cedula);
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.ClientesService.delete(this.state.selectedCliente.cedula).then(data => {
        this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.ClientesService.getAll().then(data => this.setState({Clientes: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Header />
        <Menubar model={this.items}/>
        <br/>
        <Panel header="Clientes">
            <DataTable value={this.state.Clientes} paginator={true} rows="5" selectionMode="single" selection={this.state.selectedCliente} onSelectionChange={e => this.setState({selectedCliente: e.value})}>
              <Column field="cedula" header="Cédula"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="direccion" header="Dirección"></Column>
              <Column field="telefono" header="Teléfono"></Column>
              <Column field="email" header="Email"></Column>
            </DataTable>
        </Panel>
        <Dialog header={this.state.dialogTitle} visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="cliente-form">

              <span className="p-float-label">
                <InputText value={this.state.cliente.cedula} style={{width : '100%'}} id="cedula" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let cliente = Object.assign({}, prevState.cliente);
                        cliente.cedula = val;

                        return { cliente };
                    })}
                  } />
                <label htmlFor="cedula">Cédula</label>
              </span>
              <br/>
              
              <span className="p-float-label">
                <InputText value={this.state.cliente.nombre
      } style={{width : '100%'}} id="nombre" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let cliente = Object.assign({}, prevState.cliente);
                        cliente.nombre
               = val

                        return { cliente };
                    })}
                  } />
                <label htmlFor="nombre">Nombre</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.cliente.direccion} style={{width : '100%'}} id="direccion" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let cliente = Object.assign({}, prevState.cliente);
                        cliente.direccion = val

                        return { cliente };
                    })}
                  } />
                <label htmlFor="direccion">Dirección</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.cliente.telefono} style={{width : '100%'}} id="telefono" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let cliente = Object.assign({}, prevState.cliente);
                        cliente.telefono = val

                        return { cliente };
                    })}
                  } />
                <label htmlFor="telefono">Teléfono</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.cliente.email} style={{width : '100%'}} id="email" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let cliente = Object.assign({}, prevState.cliente);
                        cliente.email = val

                        return { cliente };
                    })}
                  } />
                <label htmlFor="email">Email</label>
              </span>     
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
      dialogTitle: "Crear Cliente",
      cliente : {
        cedula: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null
       
      }
    });
    document.getElementById('cliente-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      dialogTitle: "Editar Cliente",
      cliente : {
        cedula: this.state.selectedCliente.cedula,
        nombre: this.state.selectedCliente.nombre,
        direccion: this.state.selectedCliente.direccion,
        telefono: this.state.selectedCliente.telefono,
        email: this.state.selectedCliente.email
        
      }
    })
  }
}
