import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ConsultaService = class ConsultaService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'http://localhost:49945/api';
    }
    postConsulta() {
        return this.http.post(this.rootURL + '/Consultas', this.formData);
    }
    putConsulta() {
        return this.http.put(this.rootURL + '/Consultas' + this.formData.Id_Consulta, this.formData);
    }
    refreshList() {
        this.http.get(this.rootURL + '/Consultas')
            .toPromise()
            .then(res => this.list = res);
    }
};
ConsultaService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ConsultaService);
export { ConsultaService };
//# sourceMappingURL=consulta.service.js.map