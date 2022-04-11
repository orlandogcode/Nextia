import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tareas } from './tareas';

@Injectable({
  providedIn: 'root'
})
export class ServiciotareasService {

  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }
  
  obtenerListaDeTareas():Observable<Tareas[]>{
    return this.httpClient.get<Tareas[]>(`${this.baseURL}`);
  }
}
