import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campania-amaya',
  templateUrl: './campania-amaya.component.html',
  styleUrl: './campania-amaya.component.css'
})
export class CampaniaAmayaComponent implements OnInit{
  constructor(
    public route:ActivatedRoute
  ) { }
  
  ngOnInit(): void {
      
  }

}
