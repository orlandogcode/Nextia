import { Component, OnInit } from '@angular/core';
import { ServiciotareasService } from '../serviciotareas.service';
import { Tareas } from '../tareas';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  homework : Tareas[];

  constructor(private tareaServicio:ServiciotareasService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  private obtenerTareas(){
    this.tareaServicio.obtenerListaDeTareas().subscribe(dato => {
      this.homework = dato;
    })
  }

  // constructor() { }

  // ngOnInit(): void {
  //   this.homework = [{
  //     "id" : 1,
  //     "tarea" : "Tarea 1",
  //     "descripcion" : "Primer tarea",
  //     "accion" : ""
  //   },
  //   {
  //     "id" : 2,
  //     "tarea" : "Tarea 2",
  //     "descripcion" : "Segunda tarea",
  //     "accion" : ""
  //   }];
  // }

}
