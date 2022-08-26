import { Injectable } from '@angular/core';

@Injectable({
  // modulo donde se va a proveer el servicio modulo raiz 
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }
  obtenerAlumnos(){
      return[
      {id: 1, nombre:'Abner', apellido: 'Garcia'},
      {id: 2, nombre:'Jorge', apellido: 'Suárez'}
      ];
    }
}
