import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {

  // @Input() variable: string[] = [];
  @Input() listaEstudiantesHijo: string[] = [];
  @Output() eventoSalida: EventEmitter<any> = new EventEmitter<any>();
  textoRecibido: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  obtenerEventoSalida(texto: any){
    this.eventoSalida.emit(texto.mensaje);

    console.log(texto);

  }

}
