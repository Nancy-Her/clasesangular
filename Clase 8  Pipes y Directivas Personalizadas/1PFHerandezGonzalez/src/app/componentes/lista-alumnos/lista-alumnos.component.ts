import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarPopUpComponent } from '../editar-pop-up/editar-pop-up.component';


export interface alumno { 
 
  nombre: string;
  apellido: string;
  telefono: number;
  correo: string;
  curso: string;
}


const ELEMENT_DATA: alumno[] = [
  { nombre: 'Francisco', apellido: 'González Flores', telefono: 5523362810 ,correo: 'ejemplo@hotmail.com' , curso: 'Angular'},
  { nombre: 'Ricardo', apellido: 'Vázquez González', telefono: 5523942930 ,correo: 'ejemplo@hotmail.com' , curso: 'VueJS'}
  
]

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  columnas: string[] = ['nombre', 'apellido', 'telefono', 'correo', 'curso', 'acciones'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<alumno> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<alumno>;


 constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: alumno){
    this.dataSource.data = this.dataSource.data.filter((alumno: alumno) => alumno.nombre != elemento.nombre);
  }

  editar(elemento: alumno){
    const dialogRef = this.dialog.open(EditarPopUpComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(alumno => alumno.nombre != resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}
