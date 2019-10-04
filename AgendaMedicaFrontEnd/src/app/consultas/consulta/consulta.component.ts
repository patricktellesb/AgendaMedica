import { ConsultaService } from 'src/app/shared/consulta.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: []
})
export class ConsultaComponent implements OnInit {

  constructor(private service:ConsultaService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
 resetForm(form?:NgForm)
 {
   if(form!= null)
   form.form.reset();
   this.service.formData =
   { 
   Id_Consulta: 0,
   Nome_Paciente: '',
   Dat_Nascimento: null,
   Dat_Inicio_Consulta: null,
   Dat_Fim_Consulta:  null,
   Observacao: null
   }
 }

 onSubmit(form:NgForm)
{
  if(this.service.formData.Id_Consulta == 0)
  this.insertRecord(form)
  else 
  this.updateRecord(form)
  
}
insertRecord(form:NgForm)
{

  this.service.postConsulta().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Consulta Agendada Com Sucesso.','Sucesso');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
    )
}

updateRecord(form:NgForm)
{

  this.service.putConsulta().subscribe(
    res => {
      this.resetForm(form);
      this.toastr.info('Consulta alterada Com Sucesso.','Sucesso')
      this.service.refreshList();
    },
    err => {console.log(err);
    }
    )
}

}
