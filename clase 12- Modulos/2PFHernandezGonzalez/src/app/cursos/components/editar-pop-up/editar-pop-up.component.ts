import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cursos } from '../lista-cursos/lista-cursos.component';

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
    @Inject(MAT_DIALOG_DATA) public data: cursos
  ) {
    this.formulario = fb.group({
      curso: new FormControl(data.curso),
      categoria: new FormControl(data.categoria),
      duracion: new FormControl(data.duracion),
      nivel: new FormControl(data.nivel)
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