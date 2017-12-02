import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuteandoModule } from './ruteando/ruteando.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MiHttpService } from  './servicios/mi-http.service';
import { PersonaService } from  './servicios/persona.service';
import { ArchivoPersonaService } from  './servicios/archivo-persona.service';
 import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import * as $ from 'jquery';
import './componentes/reservas/form.js';
import { CargamesaComponent } from './componentes/cargamesa/cargamesa.component';
import {CalendarModule} from 'primeng/primeng';
import { InicioComponent } from './componentes/inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PrincipalComponent,
    LoginComponent,
    ReservasComponent,
    CargamesaComponent,
    InicioComponent
  ],
  entryComponents: [
  BotonComponent
  ],
  imports: [
    BrowserModule,
    RuteandoModule,
    FormsModule,
    Ng2SmartTableModule,CalendarModule
  ],
  providers: [MiHttpService,PersonaService,CalendarModule,ArchivoPersonaService, NguiDatetimePickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }