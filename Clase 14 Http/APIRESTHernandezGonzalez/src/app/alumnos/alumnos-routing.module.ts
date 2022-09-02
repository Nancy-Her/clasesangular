import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';



const routes: Routes = [
  {path: '', component: AlumnosComponent ,children: [
    {path: 'listaAlumnos', component: ListaAlumnosComponent},
    {path: 'nuevo', component: NuevoComponent, canActivate: [AdminGuard]}
  ]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
