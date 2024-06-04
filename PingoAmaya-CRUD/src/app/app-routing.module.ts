import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './component/mascota/mascota.component';
import { MascotaEditarCrearComponent } from './component/mascota/mascota-editar-crear/mascota-editar-crear.component';
import { MascotaListarComponent } from './component/mascota/mascota-listar/mascota-listar.component';

const routes: Routes = [
  {
    path: 'mascotas', component: MascotaComponent, children: [
      {
        path: 'nuevo', component: MascotaEditarCrearComponent
      },
      {
        path: 'listar', component: MascotaListarComponent
      },
      {
        path: 'editar/:id', component: MascotaEditarCrearComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
