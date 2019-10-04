import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ConsultaComponent = class ConsultaComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData =
            {
                Id_Consulta: 0,
                Nome_Paciente: '',
                Dat_Nascimento: null,
                Dat_Inicio_Consulta: null,
                Dat_Fim_Consulta: null,
                Observacao: null
            };
    }
    onSubmit(form) {
        if (this.service.formData.Id_Consulta == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    }
    insertRecord(form) {
        this.service.putConsulta().subscribe(res => {
            this.resetForm(form);
            this.toastr.success('Consulta Agendada Com Sucesso.', 'Sucesso');
        }, err => { console.log(err); });
    }
    updateRecord(form) {
        this.service.putConsulta().subscribe(res => {
            this.resetForm(form);
            this.toastr.info('Consulta alterada Com Sucesso.', 'Sucesso');
            this.service.refreshList();
        }, err => { console.log(err); });
    }
};
ConsultaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-consulta',
        templateUrl: './consulta.component.html',
        styles: []
    })
], ConsultaComponent);
export { ConsultaComponent };
//# sourceMappingURL=consulta.component.js.map