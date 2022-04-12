import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciotareasService } from '../serviciotareas.service';
import { Tareas } from '../tareas';

@Component({
  selector: 'app-actualizar-tareas',
  templateUrl: './actualizar-tareas.component.html',
  styleUrls: ['./actualizar-tareas.component.css']
})
export class ActualizarTareasComponent implements OnInit {

  id: number;
  tarea: Tareas = new Tareas();

  constructor(private route: ActivatedRoute, private router: Router, private tareaServicio: ServiciotareasService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tarea = new Tareas();

    this.tareaServicio.obtenerTareaPorId(this.id).subscribe(dato => {
      this.tarea = dato;
    }, error => console.log(error));
  }

  irAlaListaDeTareas() {
    this.router.navigate(['/tareas']);
    // swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit() {
    this.tareaServicio.actualizarTarea(this.id, this.tarea).subscribe(dato => {
      this.irAlaListaDeTareas();
    }, error => console.log(error));
  }

}
