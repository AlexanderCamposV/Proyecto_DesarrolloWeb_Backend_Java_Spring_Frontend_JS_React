import axios from 'axios';

export class ClientesService {
    baseUrl = "http://localhost:8080/clientes/";

    getAll(){
        return axios.get(this.baseUrl + "listar").then(res => res.data);
    }

    save(persona) {
        return axios.post(this.baseUrl + "guardar", persona).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "eliminar/"+id).then(res => res.data);
    }

    getOne(cedula) {
        return axios.get(this.baseUrl + "listar/"+cedula).then(res => res.data);
    }
}
