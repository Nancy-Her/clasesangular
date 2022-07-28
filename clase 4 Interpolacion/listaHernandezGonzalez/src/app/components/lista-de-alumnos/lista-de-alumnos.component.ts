import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

  estudiantes = [
    {
      id: "1",
      nombre: 'Francisco',
      apellido1: 'González',
      apellido2: 'Flores',
      calificacion: '6',
      resultado: 'aprobado'
    }, {
      id: "2",
      nombre: 'Ricardo',
      apellido1: 'Vázquez',
      apellido2: 'González',
      calificacion: '8.5',
      resultado: 'aprobado'
    }, {
      id: "3",
      nombre: 'Jaime',
      apellido1: 'Hernández',
      apellido2: 'Mendoza',
      calificacion: '10',
      resultado: 'aprobado'
    }, {
      id: "4",
      nombre: 'Eduardo',
      apellido1: 'Gómez',
      apellido2: 'García',
      calificacion: '5',
      resultado: 'no aprobado'
    }, {
      id: "5",
      nombre: 'Juan',
      apellido1: 'Vázquez',
      apellido2: 'Torres',
      calificacion: '7.5',
      resultado: 'aprobado'
    }, {
      id: "6",
      nombre: 'Jarmín',
      apellido1: 'Larios',
      apellido2: 'Saucedo',
      calificacion: '6',
      resultado: 'aprobado'
    }, {
      id: "7",
      nombre: 'Mariana',
      apellido1: 'Bracamontes',
      apellido2: 'Olvera',
      calificacion: '5.5',
      resultado: 'no aprobado'
    }, {
      id: "8",
      nombre: 'Daniel',
      apellido1: 'González',
      apellido2: 'Francisco',
      calificacion: '8',
      resultado: 'aprobado'
    }, {
      id: "9",
      nombre: 'Oscar',
      apellido1: 'Cruz',
      apellido2: 'Sanchez',
      calificacion: '5.7',
      resultado: 'no aprobado'
    }, {
      id: "10",
      nombre: 'Diana',
      apellido1: 'Saucedo',
      apellido2: 'Cruz',
      calificacion: '9',
      resultado: 'aprobado'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
