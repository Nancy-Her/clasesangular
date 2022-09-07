import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  formulario: FormGroup;
  cursos: any[] = [];

  constructor(
    private curso: CursoService,
     private dialogRef: MatDialogRef<NuevoComponent>,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  agregarCurso(){
    console.log(this.formulario);
    this.cursos.push(this.formulario.value);

    
    const c: Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
    }
    this.curso.nuevoCurso(c).subscribe((curso: Curso) => {
      alert(`${curso.id}-${curso.nombre} agregado correctamente`);
      this.router.navigate(['cursos/listaCursos']);
    });
     this.dialogRef.close(this.formulario.value);
  }

}
