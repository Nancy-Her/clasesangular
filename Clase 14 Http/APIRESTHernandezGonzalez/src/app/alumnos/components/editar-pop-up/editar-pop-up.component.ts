import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-editar-pop-up',
  templateUrl: './editar-pop-up.component.html',
  styleUrls: ['./editar-pop-up.component.css']
})
export class EditarPopUpComponent implements OnInit {
   formulario: FormGroup;

  constructor(
    private alumnoService: AlumnoService,
    private dialogRef: MatDialogRef<EditarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private alumno: Alumno
  ) {

 


    this.formulario = new FormGroup({
      nombre: new FormControl(alumno.nombre),
      apellidos: new FormControl(alumno.apellidos),
      telefono: new FormControl(alumno.telefono),
      correo: new FormControl(alumno.correo),
      curso: new FormControl(alumno.curso),
    })
  }

  ngOnInit(): void {
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

  editarAlumno(){
    const c: Alumno = {
      id: this.alumno.id,
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      curso: this.formulario.value.curso,
    }
    this.alumnoService.modificarAlumno(c).subscribe((alumno: Alumno) => {
      this.dialogRef.close(alumno);
    });
  }

}
