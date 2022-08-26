import { Component, Inject, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alumno } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-editar-pop-up',
  templateUrl: './editar-pop-up.component.html',
  styleUrls: ['./editar-pop-up.component.css']
})
export class EditarPopUpComponent implements OnInit {
 formulario: FormGroup;

   constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      telefono: new FormControl(data.telefono),
      correo: new FormControl(data.correo),
      curso: new FormControl(data.curso)
    })
  }

  ngOnInit(): void {
  }
   actualizar(){
    this.dialogRef.close(this.formulario.value);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
