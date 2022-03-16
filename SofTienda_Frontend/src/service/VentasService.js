//import React, { Component } from 'react';
import axios from 'axios';

export class VentasService {
    baseUrl = "http://localhost:8080/ventas/";

    getAll(){
        return axios.get(this.baseUrl + "listar").then(res => res.data);
    }

    save(venta) {
        return axios.post(this.baseUrl + "guardar", venta).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "eliminar/"+id).then(res => res.data);
    }

    getOne(cedulacliente) {
        return axios.get(this.baseUrl + "listar/"+cedulacliente).then(res => res.data);
    }
}
