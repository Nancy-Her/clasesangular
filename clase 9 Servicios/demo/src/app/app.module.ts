import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { Componente2Component } from './components/componente2/componente2.component';
  // instancia
import { config, configToken } from './config';
import { AlumnoService } from './services/alumno.service';
import { cursos } from './services/curso.data';
import { CursoService } from './services/curso.service';
import { CursosAlphaService} from './services/cursos-alpha.service';

@NgModule({
  declarations: [
    AppComponent,
    Componente2Component
  ],
  imports: [
    BrowserModule
  ],
  // providers se puede agregar los servicios que se quiere que se instancien a través de la inyección de dependencias
  providers: [
  // instancia que siempre va a tomar el último 
      AlumnoService,
      {provide: CursoService, useExisting: CursosAlphaService},
      {provide: CursoService, useClass: CursosAlphaService},
      // cursos no es un objeto si no una constante
      {provide: CursoService, useValue: cursos},
      {provide: CursoService, useFactory: () => {
        return environment.experimental ? new CursosAlphaService() : new CursoService();
      }},
      {provide: configToken, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
