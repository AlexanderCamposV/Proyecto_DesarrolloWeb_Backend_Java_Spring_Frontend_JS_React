import axios from 'axios';

export class ConsolidadoService {
    baseUrl = "http://localhost:8080/consolidado/";

    getAll() {
        return axios.get(this.baseUrl + "listar").then(res => res.data);
    }
}
