import { Component } from '@angular/core';
import { Hijo1Component } from './components/hijo1/hijo1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaEstudiantesPadre : string[] = [
  'Abner',
  'Jorge',
  'Fran',
  'Fernando'
  ];
  mensajeObtenido : string = '';

  // variable: componente ;
  //las propiedades se les puede colocar un signo de ? para declarar que es nulo o ! decirle al motor que tendra algun valor diferente
  @ViewChild(Hijo1Component) componenteHijo1!: Hijo1Component;
  obtenerInformacion(texto: string){
    this.mensajeObtenido = texto;

  }
}
