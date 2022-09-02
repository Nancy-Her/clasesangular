import { Component, Inject, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { clase } from '../lista-clases/lista-clases.component';

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
    @Inject(MAT_DIALOG_DATA) public data: clase
  ) {
    this.formulario = fb.group({
      categoria: new FormControl(data.categoria),
      curso: new FormControl(data.curso),
      clases: new FormControl(data.clases)
    
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

