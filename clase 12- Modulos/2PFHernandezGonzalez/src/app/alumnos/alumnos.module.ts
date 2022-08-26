import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EditarPopUpComponent } from './components/editar-pop-up/editar-pop-up.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { SharedModule } from '../shared/shared.module';
import { AltaAlumnosComponent } from './components/alta-alumnos/alta-alumnos.component';






@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarPopUpComponent,
     ResaltadoDirective,
     AltaAlumnosComponent
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
