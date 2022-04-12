import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciotareasService } from '../serviciotareas.service';
import { Tareas } from '../tareas';

@Component({
  selector: 'app-registar-tareas',
  templateUrl: './registar-tareas.component.html',
  styleUrls: ['./registar-tareas.component.css']
})
export class RegistarTareasComponent implements OnInit {

  tarea : Tareas = new Tareas();
  constructor(private tareaServicio:ServiciotareasService, private router : Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.tareaServicio.registrarTarea(this.tarea).subscribe(dato => {
      // console.log(dato);
      this.irALaListaDeTareas();
    }, error => console.log(error));
  }

  irALaListaDeTareas(){
    this.router.navigate(['/tareas']);
  }

}
