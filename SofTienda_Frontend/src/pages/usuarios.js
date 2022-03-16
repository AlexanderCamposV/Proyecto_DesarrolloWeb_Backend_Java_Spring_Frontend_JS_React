import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import { UsuariosService } from '../service/UsuariosService';
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


export default class Usuarios extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      dialogTitle: "",
      usuario: {
        cedula: null,
        rol: null,
        nombre: null,
        email: null,
        username: null,
        password: null
      },
      selectedUsuario : {

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
    this.usuarioService = new UsuariosService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.usuarioService.getAll().then(data => this.setState({usuarios: data}))
  }

  save() {
    if(this.isNewUser()) {
      this.encryptPassword()
    }

    setTimeout(() => {
      this.usuarioService.save(this.state.usuario).then(data => {
        this.setState({
          visible : false,
          usuario: {
          cedula: null,
          rol: null,
          nombre: null,
          email: null,
          username: null,
          password: null
          }
        });
        this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
        this.usuarioService.getAll().then(data => this.setState({usuarios: data}))
      })
    }, 100)
  }

  isNewUser() {
    if (!this.state.selectedUsuario.password)
      return true
    
    return false
  }

  encryptPassword() {
    const encryptedPassword = CryptoJS.AES.encrypt(this.state.usuario.password, 'clave').toString();
    this.setState(state => ({
      ...state,
      usuario: {
        ...state.usuario,
        password: encryptedPassword,
      }
    }))
  }

  delete() {
    //console.log(this.state.selectedUsuario.cedula);
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.usuarioService.delete(this.state.selectedUsuario.cedula).then(data => {
        this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.usuarioService.getAll().then(data => this.setState({usuarios: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Header />
        <Menubar model={this.items}/>
        <br/>
        <Panel header="Usuarios">
            <DataTable value={this.state.usuarios} paginator={true} rows={5} selectionMode="single" selection={this.state.selectedUsuario} onSelectionChange={e => this.setState({selectedUsuario: e.value})}>
              <Column field="cedula" header="Cédula"></Column>
              <Column field="rol" header="Cargo"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="email" header="Email"></Column>
              <Column field="username" header="Username"></Column>
              <Column field="password" header="Contraseña"></Column>
            </DataTable>
        </Panel>
        <Dialog header={this.state.dialogTitle} visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="usuario-form">

              <span className="p-float-label">
                <InputText value={this.state.usuario.cedula} style={{width : '100%'}} id="cedula" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.cedula = val;

                        return { usuario };
                    })}
                  } />
                <label htmlFor="cedula">Cédula</label>
              </span>
              <br/>
              
              <span className="p-float-label">
                <InputText value={this.state.usuario.rol
      } style={{width : '100%'}} id="rol" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.rol
               = val

                        return { usuario };
                    })}
                  } />
                <label htmlFor="rol
      ">Cargo</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.usuario.nombre} style={{width : '100%'}} id="nombre" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.nombre = val

                        return { usuario };
                    })}
                  } />
                <label htmlFor="nombre">Nombre</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.usuario.email} style={{width : '100%'}} id="email" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.email = val

                        return { usuario };
                    })}
                  } />
                <label htmlFor="email">Email</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.usuario.username} style={{width : '100%'}} id="username" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.username = val

                        return { usuario };
                    })}
                  } />
                <label htmlFor="username">Usuario</label>
              </span>     
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.usuario.password} style={{width : '100%'}} id="password" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let usuario = Object.assign({}, prevState.usuario);
                        usuario.password = val

                        return { usuario };
                    })}
                  } />
                <label htmlFor="password">Contraseña</label>
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
      dialogTitle: "Crear Usuario",
      usuario : {
        cedula: null,
        rol: null,
        nombre: null,
        email: null,
        username: null,
        password: null
      },
      selectedUsuario : {}
    });
  }

  showEditDialog() {
    this.setState({
      visible : true,
      dialogTitle: "Editar Usuario",
      usuario : {
        cedula: this.state.selectedUsuario.cedula,
        rol: this.state.selectedUsuario.rol,
        nombre: this.state.selectedUsuario.nombre,
        email: this.state.selectedUsuario.email,
        username: this.state.selectedUsuario.username,
        password: this.state.selectedUsuario.password
        
      }
    })
  }
}