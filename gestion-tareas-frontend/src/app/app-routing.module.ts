import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarTareasComponent } from './actualizar-tareas/actualizar-tareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { RegistarTareasComponent } from './registar-tareas/registar-tareas.component';

const routes: Routes = [
  { path: 'tareas', component: ListaTareasComponent },
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'registrar-tareas', component: RegistarTareasComponent },
  { path: 'editar-tarea/:id', component: ActualizarTareasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
