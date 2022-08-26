import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarPopUpComponent } from '../editar-pop-up/editar-pop-up.component';


export interface clase { 
 
  categoria: string;
  curso: string;
  clases: string;

}

const ELEMENT_DATA: clase[] = [
  { categoria: 'Programación', curso: 'Desarrollo Web', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'JavaScript', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'React Js', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Diseño UX/UI', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Programación Backend', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Wordpress', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Desarrollo de Aplicaciones', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Python', clases: 'Introducción al Desarrollo Web + Onboarding' },
  { categoria: 'Programación', curso: 'Angular', clases: 'Introducción al Desarrollo Web + Onboarding' }

  
]


@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit {
 columnas: string[] = ['categoria', 'curso', 'clases', 'acciones'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<clase> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<clase>;


 constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: clase){
    this.dataSource.data = this.dataSource.data.filter((clase: clase) => clase.curso != elemento.curso);
  }

  editar(elemento: clase){
    const dialogRef = this.dialog.open(EditarPopUpComponent, {
      width: '450px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(clase => clase.curso != resultado.curso);
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
