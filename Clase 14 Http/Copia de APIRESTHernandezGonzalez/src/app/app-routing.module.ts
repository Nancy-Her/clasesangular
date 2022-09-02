import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { MenuComponent } from './core/components/menu/menu.component';



const routes: Routes = [

  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then((m) => m.ClasesModule),
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard]
  },
  {path: '', redirectTo: 'inicio', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
