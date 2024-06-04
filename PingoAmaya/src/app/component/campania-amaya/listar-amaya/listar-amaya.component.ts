import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaniaService } from '../../../service/campania.service';
import { Campania } from '../../../model/campania';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-amaya',
  templateUrl: './listar-amaya.component.html',
  styleUrl: './listar-amaya.component.css'
})
export class ListarAmayaComponent implements OnInit{
  lista: Campania[] = [];
  displayedColumns = [ 'nombre', 'fechaInicio', 'presupuesto', 'medioComunicacion'];
  dataSource = new MatTableDataSource<Campania>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private campaniaService: CampaniaService
  ) { }

  ngOnInit(): void {
    this.campaniaService.listar().subscribe(data => this.dataSource.data = data);
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
