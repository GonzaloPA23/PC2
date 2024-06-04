import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MascotaComponent } from './component/mascota/mascota.component';
import { MascotaListarComponent } from './component/mascota/mascota-listar/mascota-listar.component';
import { MascotaEditarCrearComponent } from './component/mascota/mascota-editar-crear/mascota-editar-crear.component';

// estos modulos son a adicionar
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';//add
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';//add
import { MatSortModule } from '@angular/material/sort'; //add
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core'; //falto
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    MascotaListarComponent,
    NavbarComponent,
    MascotaEditarCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, //falto adicionar
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
