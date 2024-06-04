import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAmayaComponent } from './component/navbar-amaya/navbar-amaya.component';

const routes: Routes = [
  {
    path: 'pingo',
    children: [
      {
        path: 'amaya-list',
        component: NavbarAmayaComponent,
      },
      {
        path: 'amaya-add',
        component: NavbarAmayaComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
