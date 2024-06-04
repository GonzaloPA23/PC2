import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent implements OnInit{
  constructor(public route:ActivatedRoute) {}
  
  ngOnInit(): void {
  }
}
