import axios from 'axios';

export class UsuariosService {
    baseUrl = "http://localhost:8080/usuarios/";

    getAll(){
        return axios.get(this.baseUrl + "listar").then(res => res.data);
    }

    save(persona) {
        return axios.post(this.baseUrl + "guardar", persona).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "eliminar/"+id).then(res => res.data);
    }
}