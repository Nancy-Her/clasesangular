import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
formulario: FormGroup;
  constructor(
    private alumno: AlumnoService,
     private dialogRef: MatDialogRef<NuevoComponent>,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      correo: new FormControl(),
      curso: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  agregarAlumno(){
    const c: Alumno = {
      id: '',
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      curso: this.formulario.value.curso,
    }
    this.alumno.nuevoAlumno(c).subscribe((alumno: Alumno) => {
      alert(`${alumno.id}-${alumno.nombre} agregado correctamente`);
      this.router.navigate(['alumnos/listaAlumnos']);
    });
     this.dialogRef.close(this.formulario.value);
  }

}
