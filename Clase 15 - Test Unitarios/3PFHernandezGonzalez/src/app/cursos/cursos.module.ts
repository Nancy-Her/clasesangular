import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursosService } from './services/cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { EditarPopUpComponent } from './components/editar-pop-up/editar-pop-up.component';
import { SharedModule } from '../shared/shared.module';
import { ResaltadoDirective } from '../shared/directives/resaltado.directive';
import { TransformarPipe } from './pipes/transformar.pipe';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { CursosComponent } from './components/cursos/cursos.component';





@NgModule({
  declarations: [
    ListaCursosComponent,
    ResaltadoDirective,
    EditarPopUpComponent,
    TransformarPipe,
    NuevoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
    

  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
