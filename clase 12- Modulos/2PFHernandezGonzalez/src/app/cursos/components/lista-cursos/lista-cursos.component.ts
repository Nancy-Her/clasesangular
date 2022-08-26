import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarPopUpComponent } from '../editar-pop-up/editar-pop-up.component';


export interface cursos { 
 
  curso: string;
  categoria: string;
  duracion: string;
  nivel: string;
 
}


const ELEMENT_DATA: cursos[] = [
  { curso: 'Desarrollo Web', categoria: 'Programación', duracion: '10' ,nivel: 'Alto' },
  { curso: 'JavaScript', categoria: 'Programación', duracion: '8' ,nivel: 'Alto' },
  { curso: 'React Js', categoria: 'Programación', duracion: '8' ,nivel: 'Alto' },
  { curso: 'Diseño UX/UI', categoria: 'Diseño UX/UI', duracion: '13' ,nivel: 'Alto' },
  { curso: 'Programación Backend', categoria: 'Programación', duracion: '24' ,nivel: 'Alto' },
  { curso: 'Wordpress', categoria: 'Programación', duracion: '5' ,nivel: 'Moderado' },
  { curso: 'Desarrollo de Aplicaciones', categoria: 'Programación', duracion: '9' ,nivel: 'Alto' },
  { curso: 'Python', categoria: 'Programación', duracion: '13' ,nivel: 'Moderado' },
  { curso: 'Angular', categoria: 'Programación', duracion: '9' ,nivel: 'Moderado' }



  
]



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  columnas: string[] = ['curso', 'categoria', 'duracion', 'nivel', 'acciones'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<cursos> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<cursos>;


   constructor(
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }

  eliminar(elemento: cursos){
    this.dataSource.data = this.dataSource.data.filter((cursos: cursos) => cursos.curso != elemento.curso);
  }

   editar(elemento: cursos){
    const dialogRef = this.dialog.open(EditarPopUpComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(cursos => cursos.curso != resultado.curso);
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
