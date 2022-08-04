import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metodoPruebaPadre(componente: string){
    console.log(componente + "Hola Mundo");
  }
}
