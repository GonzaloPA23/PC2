import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaniaService } from '../../../service/campania.service';

@Component({
  selector: 'app-crear-amaya',
  templateUrl: './crear-amaya.component.html',
  styleUrl: './crear-amaya.component.css'
})
export class CrearAmayaComponent implements OnInit{
  form: FormGroup;
  mensaje: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private campaniaService: CampaniaService
  
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      presupuesto: ['', [Validators.required, Validators.min(500), Validators.max(7500)]],
      medioComunicacion: ['', Validators.required]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      if (new Date(formValue.fechaFin) < new Date(formValue.fechaInicio)) {
        this.mensaje = 'La fecha de fin no puede ser menor que la fecha de inicio.';
        return;
      }
      this.mensaje = 'Formulario enviado exitosamente!';
      // Aquí puedes agregar el código para enviar el formulario al servidor
      this.campaniaService.crear(formValue).subscribe(() => {
        this.router.navigate(['pingo/amaya-list']);
      });
      
    }
    else {
      this.mensaje = 'Por favor, complete todos los campos correctamente.';
    }
  }
  
  
}
