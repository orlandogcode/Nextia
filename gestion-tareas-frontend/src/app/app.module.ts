import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { HttpClientModule } from  '@angular/common/http';
import { RegistarTareasComponent } from './registar-tareas/registar-tareas.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTareasComponent } from './actualizar-tareas/actualizar-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    RegistarTareasComponent,
    ActualizarTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
