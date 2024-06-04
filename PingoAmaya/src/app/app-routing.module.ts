import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAmayaComponent } from './component/navbar-amaya/navbar-amaya.component';
import { ListarAmayaComponent } from './component/campania-amaya/listar-amaya/listar-amaya.component';
import { CrearAmayaComponent } from './component/campania-amaya/crear-amaya/crear-amaya.component';

const routes: Routes = [
  {
    path: 'pingo',
    children: [
      {
        path: 'amaya-list',
        component: ListarAmayaComponent,
      },
      {
        path: 'amaya-add',
        component: CrearAmayaComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
