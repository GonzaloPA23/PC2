import { Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MascotaService } from '../../../service/mascota.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mascota-listar',
  templateUrl: './mascota-listar.component.html',
  styleUrl: './mascota-listar.component.css'
})
export class MascotaListarComponent implements OnInit{
  list: Mascota[] = []; 
  displayedColumns = ['idMascota', 'direccion', 'fechaNacimiento', 'tamano', 'status', 'accion1', 'accion2'];
  dataSource = new MatTableDataSource<Mascota>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private mascotaService: MascotaService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mascotaService.list().subscribe(data => this.dataSource.data = data);
    this.mascotaService.getList().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
