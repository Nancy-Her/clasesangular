import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.css']
})
export class AltaAlumnosComponent implements OnInit {
  formulario: FormGroup;


    constructor(
    private fb: FormBuilder
    ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      curso: new FormControl('', [Validators.required]),



    });

  }

  ngOnInit(): void {
  }


  registro(){
     // let name = this.formulario.controls['nombre'].value;
 

    console.log(this.formulario.value);
 

  }

}
