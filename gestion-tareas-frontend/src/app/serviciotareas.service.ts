import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tareas } from './tareas';

@Injectable({
  providedIn: 'root'
})
export class ServiciotareasService {

  private baseURL = "http://localhost:8080/api/v1/tareas";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeTareas(): Observable<Tareas[]> {
    return this.httpClient.get<Tareas[]>(`${this.baseURL}`);
  }

  registrarTarea(tarea: Tareas): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, tarea);
  }

  obtenerTareaPorId(id:number): Observable<Tareas> {
    return this.httpClient.get<Tareas>(`${this.baseURL}/${id}`);
  }

  actualizarTarea(id:number, tarea: Tareas): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, tarea);
  }

  eliminarTarea(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
