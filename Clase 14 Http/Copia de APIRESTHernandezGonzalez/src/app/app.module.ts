import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CursosModule } from './cursos/cursos.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ClasesModule } from './clases/clases.module';
import { MenuComponent } from './core/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    CursosModule,
    
    SharedModule,
    ClasesModule,
    BrowserAnimationsModule

   
  ],
  providers: [
   AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
