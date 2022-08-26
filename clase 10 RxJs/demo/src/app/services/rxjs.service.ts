 import { Injectable } from '@angular/core';
 import { from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
   profesores: any[] = [
    {id: 1, nombre: 'Abner', curso: 'Angular'},
    {id: 2, nombre: 'Fran', curso: 'ReactJS'},
    {id: 3, nombre: 'Andres', curso: 'Angular'}
  ];
    profesoresObservable: Observable<any>;
    cursos: any[] =[];
    cursosSubject: Subject<any>;

alumnos: any = [
  {id:1, nombre: 'Roman',curso: 'angular'},
  {id:2, nombre: 'Abner',curso: 'angular'},
  {id:3, nombre: 'Jorge',curso: 'angular'},
  {id:4, nombre: 'Frank',curso: 'angular'},
  {id:4, nombre: 'Ana',curso: 'angular'}

  ];

  constructor() { 
    this.cursosSubject = new Subject();
    // El método next es un metodo de la clase suscriptor
  this.profesoresObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.profesores);
       setTimeout(()=>{
        this.profesores.push({id: 4, nombre: 'Roman', curso: 'Kotlin' });
        suscriptor.next(this.profesores);
      }, 3000)
  });
}
  obtenerPromiseProfesores(){
    return new Promise((resolve,reject) => {
      if(this.profesores.length > 0){
        resolve(this.profesores)
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay profesores en este arreglo'

        });
      }
    });
  }


   obtenerObservableProfesores(){
    return this.profesoresObservable;
  }
  obtenerObservableCursos(){
    return this.cursosSubject.asObservable();
  }
  agregarNuevoCurso( curso: any){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
    console.log(this.cursos);
  }
  obtenerObservableAlumnos(){
    // from que retorno es un observable de tipo any (se va a crear un evento por cada item )
    // of retorn un observble un arreglo tipo any (solo vas a tener un evento que te va a retornar el evento completo)
    return from(this.alumnos);
  }

    // agregarNuevoProfesor(profesor : any){

    //   this.profesores.push(profesor);
    //   console.log(this.profesores);

    // }

}
