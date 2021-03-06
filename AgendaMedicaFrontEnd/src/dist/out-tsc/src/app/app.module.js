import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConsultaComponent } from './consultas/consulta/consulta.component';
import { ConsultaListComponent } from './consultas/consulta-list/consulta-list.component';
import { ConsultaService } from './shared/consulta.service';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ConsultasComponent,
            ConsultaComponent,
            ConsultaListComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot()
        ],
        providers: [ConsultaService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map