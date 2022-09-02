import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { CursosComponent } from './components/cursos/cursos.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const routes: Routes = [
//   {path: '', component: CursosComponent ,children: [
//     {path: 'lista', component: ListaCursosComponent},
//     {path: 'nuevo', component: NuevoComponent, canDeactivate: [AdminGuard]}
//   ],
//   canActivateChild: [AdminGuard]}
// ];
  {path: 'cursos', children: [
      {path: 'listaCursos', component: ListaCursosComponent}
  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
