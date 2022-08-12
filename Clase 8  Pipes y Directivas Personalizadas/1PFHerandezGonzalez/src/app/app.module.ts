import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componentes/menu/menu.component';
import { AppMaterialModule } from './app.material.module';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { EditarPopUpComponent } from './componentes/editar-pop-up/editar-pop-up.component';
import { TransformarPipe } from './pipes/transformar.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { AltaAlumnosComponent } from './componentes/alta-alumnos/alta-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaAlumnosComponent,
    ToolbarComponent,
    EditarPopUpComponent,
    TransformarPipe,
    ResaltadoDirective,
    AltaAlumnosComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
