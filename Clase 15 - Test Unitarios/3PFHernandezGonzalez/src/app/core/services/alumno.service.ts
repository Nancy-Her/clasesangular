import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }
  
  nuevoAlumno(alumno: Alumno){
    return this.http.post<Alumno>(`${this.api}/alumnos`, alumno);
  }

  modificarAlumno(alumno: Alumno){
    return this.http.put<Alumno>(`${this.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: string){
    return this.http.delete<Alumno>(`${this.api}/alumnos/${id}`);
  }
}
