import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ConsultaListComponent = class ConsultaListComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.refreshList();
    }
    populateForm(consulta) {
        this.service.formData = Object.assign({}, consulta);
    }
};
ConsultaListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-consulta-list',
        templateUrl: './consulta-list.component.html',
        styles: []
    })
], ConsultaListComponent);
export { ConsultaListComponent };
//# sourceMappingURL=consulta-list.component.js.map