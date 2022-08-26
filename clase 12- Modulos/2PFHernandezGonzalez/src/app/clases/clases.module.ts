import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesService } from './services/clases.service';
import { ListaClasesComponent } from './components/lista-clases/lista-clases.component';
import { EditarPopUpComponent } from './components/editar-pop-up/editar-pop-up.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaClasesComponent,
    EditarPopUpComponent,
     ResaltadoDirective

  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    SharedModule
  ],
   providers: [
    ClasesService
  ]

})
export class ClasesModule { }
