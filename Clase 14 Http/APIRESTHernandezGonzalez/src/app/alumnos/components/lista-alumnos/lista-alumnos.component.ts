import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditarPopUpComponent } from '../editar-pop-up/editar-pop-up.component';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { NuevoComponent } from '../../components/nuevo/nuevo.component';



@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;
  
  constructor(
    private alumnoService : AlumnoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos()
  }

  eliminar(id: string){
    this.alumnoService.eliminarAlumno(id).subscribe((alumno: Alumno) => {
      alert(`${alumno.id} - ${alumno.nombre} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  abrirDialog(alumno: Alumno){
    const dialogRef = this.dialog.open(EditarPopUpComponent, {
      width: '450px',
      data: alumno
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        alert(`${alumno.id}-${alumno.nombre} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }
  openDialog() { 
    const dialogRef = this.dialog.open(NuevoComponent, { width: '550px', });
  }
}
