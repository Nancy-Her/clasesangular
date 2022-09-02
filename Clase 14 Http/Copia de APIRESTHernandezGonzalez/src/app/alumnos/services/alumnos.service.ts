import { Injectable } from '@angular/core';


export interface alumno { 
 
  nombre: string;
  apellido: string;
  telefono: number;
  correo: string;
  curso: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {



alumnos: alumno[] = [
  { nombre: 'Francisco', apellido: 'González Flores', telefono: 5523362810 ,correo: 'ejemplo1@hotmail.com' , curso: 'Angular'},
  { nombre: 'Ricardo', apellido: 'Vázquez González', telefono: 5523942930 ,correo: 'ejemplo2@hotmail.com' , curso: 'VueJS'},
  { nombre: 'Jaime', apellido: 'Hernández Mendoza', telefono: 5513941930 ,correo: 'ejemplo3@hotmail.com' , curso: 'Diseño UX/UI'},
  { nombre: 'Eduardo', apellido: 'Gómez García', telefono: 5530291802 ,correo: 'ejemplo4@hotmail.com' , curso: 'React Js'},
  { nombre: 'Juan', apellido: 'Vázquez Torres', telefono: 5512290483 ,correo: 'ejemplo5@hotmail.com' , curso: 'Wordpress'},
  { nombre: 'Jarmín', apellido: 'Larios Saucedo', telefono: 5529182900 ,correo: 'ejemplo6@hotmail.com' , curso: 'Python'}
  
]

  constructor() { }

  obtenerAlumnos(){
    return this.alumnos;

    
  }
  

  agregarNuevoCurso(alumno: any){
    this.alumnos.push(alumno);
  

  }



}
