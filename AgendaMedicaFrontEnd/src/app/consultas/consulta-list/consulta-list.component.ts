import { Consulta } from 'src/app/shared/consulta.model';
import { ConsultaService } from 'src/app/shared/consulta.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styles: []
})
export class ConsultaListComponent implements OnInit {
  constructor(private service: ConsultaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(consulta: Consulta) {
    this.service.formData = Object.assign({},consulta);
  }

  onDelete(Id_Consulta) {
    if (confirm('Deseja cancelar a Consulta ?')) {
      this.service.deleteConsulta(Id_Consulta)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deletado com  Sucesso', 'Agenda médica');
        },
          err => {
            console.log(err);
          })
    }
  }
}
