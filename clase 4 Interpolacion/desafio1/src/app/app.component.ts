import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Nancy Hernández';
   familiares = [
    {
      nombre: 'Fran',
      apellido: 'Azid'
    },{
      nombre: 'Jeisson',
      apellido: 'Cortes'
    },{
      nombre: 'José',
      apellido: 'Hernandez'
    }
  ];
  contenido1: string = "Este es el contenido de párrafo 1";
  contenido2: string = "Este es el contenido de párrafo 2"
}
