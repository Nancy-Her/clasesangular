import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnosService } from '../../services/alumnos.service';
import { alumno } from '../lista-alumnos/lista-alumnos.component';


@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.css']
})
export class AltaAlumnosComponent implements OnInit {
  formulario: FormGroup;


    constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AltaAlumnosComponent>,
    private alumnosService: AlumnosService,
    @Inject(MAT_DIALOG_DATA) public data: alumno
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
     let datos = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      curso: this.formulario.value.curso,
     }
     this.alumnosService.agregarNuevoCurso(datos);
     this.dialogRef.close(this.formulario.value);
      console.log(this.alumnosService.obtenerAlumnos());
    
   
  }

}