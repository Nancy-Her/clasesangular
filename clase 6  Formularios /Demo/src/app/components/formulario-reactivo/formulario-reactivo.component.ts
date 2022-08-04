import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  // formularioContacto: FormGroup = new FormGroup({
  //   nombre: new FormControl('',[Validators.required]),
  //   email: new FormControl('abner@gmail.com', [Validators.required, Validators.email]),
  //   mensaje: new FormControl('',[Validators.required])
  // })

//no sabemos si va a tener un valor determinado puede ser nulo o en algún momento va tener un valor
   formularioContacto!: FormGroup;
   //y se encuentra después de la variable
//el constructor es lo primero que se ejecuta y se coloca inyecciones de propiedades o dependencias
  constructor(
    private fb: FormBuilder
  ) {
    this.formularioContacto = this.fb.group({
      nombre: new FormControl('', [Validators.required]), 
      email: new FormControl('abner@gmail.com', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

//en ngOnInit llamados a servicios o llamas a api externas
  ngOnInit(): void {
  }
 enviarContacto(){
    console.log(this.formularioContacto);
  }

}
