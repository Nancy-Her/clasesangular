import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CursosModule } from './cursos/cursos.module';
import { ClasesModule } from './clases/clases.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MenuComponent } from './core/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ToolbarComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
