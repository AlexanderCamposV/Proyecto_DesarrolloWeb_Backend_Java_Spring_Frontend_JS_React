import React, { Component } from 'react';
import { ProductosService } from '../service/ProductosService.js';
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

export default class Productos extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      dialogTitle: "",
      producto: {
        codigo: null,
        nombre: null,
        nitproveedor: null,
        preciocompra: null,
        ivacompra: null,
        precioventa: null
      },
      selectedProducto : {

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
    this.ProductoService = new ProductosService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.ProductoService.getAll().then(data => this.setState({Productos: data}))
  }

  save() {
    this.ProductoService.save(this.state.producto).then(data => {
      this.setState({
        visible : false,
        producto: {
        codigo: null,
        nombre: null,
        nitproveedor: null,
        preciocompra: null,
        ivacompra: null,
        precioventa: null
        }
      });
      this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
      this.ProductoService.getAll().then(data => this.setState({Productos: data}))
    })
  }

  delete() {
    //console.log(this.state.selectedProducto.codigo);
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.ProductoService.delete(this.state.selectedProducto.codigo).then(data => {
        this.growl.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.ProductoService.getAll().then(data => this.setState({Productos: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Header />
        <Menubar model={this.items}/>
        <br/>
        <Panel header="Productos">
            <DataTable value={this.state.Productos} paginator={true} rows="5" selectionMode="single" selection={this.state.selectedProducto} onSelectionChange={e => this.setState({selectedProducto: e.value})}>
              <Column field="codigo" header="Código"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="nitproveedor" header="NIT Proveedor"></Column>
              <Column field="preciocompra" header="Precio Compra"></Column>
              <Column field="ivacompra" header="Iva Compra"></Column>
              <Column field="precioventa" header="Precio Venta"></Column>
            </DataTable>
        </Panel>
        <Dialog header={this.state.dialogTitle} visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="producto-form">

              <span className="p-float-label">
                <InputText value={this.state.producto.codigo} style={{width : '100%'}} id="codigo" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.codigo = val;

                        return { producto };
                    })}
                  } />
                <label htmlFor="codigo">Código</label>
              </span>
              <br/>
              
              <span className="p-float-label">
                <InputText value={this.state.producto.nombre
      } style={{width : '100%'}} id="nombre" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.nombre
               = val

                        return { producto };
                    })}
                  } />
                <label htmlFor="nombre">Nombre</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.producto.nitproveedor} style={{width : '100%'}} id="nitproveedor" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.nitproveedor = val

                        return { producto };
                    })}
                  } />
                <label htmlFor="nitproveedor">Nit Proveedor</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.producto.preciocompra} style={{width : '100%'}} id="preciocompra" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.preciocompra = val

                        return { producto };
                    })}
                  } />
                <label htmlFor="preciocompra">Precio Compra</label>
              </span>
              <br/>

              <span className="p-float-label">
                <InputText value={this.state.producto.ivacompra} style={{width : '100%'}} id="ivacompra" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.ivacompra = val

                        return { producto };
                    })}
                  } />
                <label htmlFor="ivacompra">Iva Compra</label>
              </span>     
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.producto.precioventa} style={{width : '100%'}} id="precioventa" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let producto = Object.assign({}, prevState.producto);
                        producto.precioventa = val

                        return { producto };
                    })}
                  } />
                <label htmlFor="precioventa">Precio Venta</label>
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
      dialogTitle: "Crear Producto",
      producto : {
        codigo: null,
        nombre: null,
        nitproveedor: null,
        preciocompra: null,
        ivacompra: null,
        precioventa: null
      }
    });
    document.getElementById('producto-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      dialogTitle: "Editar Producto",
      producto : {
        codigo: this.state.selectedProducto.codigo,
        nombre: this.state.selectedProducto.nombre,
        nitproveedor: this.state.selectedProducto.nitproveedor,
        preciocompra: this.state.selectedProducto.preciocompra,
        ivacompra: this.state.selectedProducto.ivacompra,
        precioventa: this.state.selectedProducto.precioventa
        
      }
    })
    
  }
}