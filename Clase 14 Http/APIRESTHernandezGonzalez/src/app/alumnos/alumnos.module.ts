import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditarPopUpComponent } from './components/editar-pop-up/editar-pop-up.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';






@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarPopUpComponent,
     ResaltadoDirective,
     AltaAlumnosComponent,
     NuevoComponent,
     AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
   providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
