import { Injectable } from '@angular/core';
import { Consulta } from './consulta.model';
import {HttpClient} from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  formData:Consulta
  readonly rootURL = 'http://localhost:49945/api';
  list : Consulta[]

  constructor(private http:HttpClient) { }

  postConsulta()
  {
    return this.http.post(this.rootURL + '/Consultas',this.formData)
  }
  putConsulta()
  {
    return this.http.put(this.rootURL + '/Consultas/'+ this.formData.Id_Consulta,this.formData)
  }
  deleteConsulta(id)
  {
    return this.http.delete(this.rootURL + '/Consultas/'+ id)
  }


  refreshList(){
    this.http.get(this.rootURL + '/Consultas')
    .toPromise()
    .then(res => this.list = res as Consulta[])
  }
}

