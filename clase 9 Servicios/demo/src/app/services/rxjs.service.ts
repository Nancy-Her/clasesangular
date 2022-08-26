import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private observableProfesores: Observable<any>;

  constructor() {
    //instanciar esta propiedad 
    this.observableProfesores = new Observable<any>((suscriptor) => {
      let profesores = [];
//hay un nuevo evento para mandar información
      suscriptor.next([
        {nombre: 'Abner', apellido: 'Garcia'}
      ]);

      setTimeout(() => {
        suscriptor.next([
          {nombre: 'Lautaro', apellido: 'Garcia'}
        ])
      }, 5000);

      suscriptor.complete();

      if(profesores.length === 0){
        suscriptor.error('Error');
      }
    });
  }

  obtenerProfesores(){
    return this.observableProfesores;
  }

  agregarProfesor(){

  }
}
