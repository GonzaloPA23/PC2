import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../../model/mascota';
import { MascotaService } from '../../../service/mascota.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mascota-editar-crear',
  templateUrl: './mascota-editar-crear.component.html',
  styleUrl: './mascota-editar-crear.component.css'
})
export class MascotaEditarCrearComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  // Define las opciones para el combobox
  statusOptions = [
    { value: 'A', viewValue: 'A' },
    { value: 'I', viewValue: 'I' },
    { value: 'P', viewValue: 'P' }
  ];
  mascota: Mascota = new Mascota();
  mensaje: string = '';
  maxFecha: Date = new Date();
  idMascota: string;
  edicion: boolean = false;

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      status: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => 
      {
        this.idMascota = data['id'];
        this.edicion = data['id'] != null;
        this.initForm();
      });

      this.form = new FormGroup({
        idMascota: new FormControl(),
        direccion: new FormControl('',[Validators.required]),
        fechaNacimiento: new FormControl('',[Validators.required]),
        tamano: new FormControl('',[Validators.required]),
        status: new FormControl('',[Validators.required])
      });
  }

  initForm(): void {
    if(this.edicion){
      this.mascotaService.listById(this.idMascota).subscribe(data => {
        this.form = new FormGroup({
          idMascota: new FormControl(data.idMascota),
          direccion: new FormControl(data.direccion),
          fechaNacimiento: new FormControl(data.fechaNacimiento),
          tamano: new FormControl(data.tamano),
          status: new FormControl(data.status)
        });
      });
    }
  }

  guardar(): void {
    this.mascota = this.form.value;
    if(this.edicion){
      this.mascotaService.update(this.mascota).subscribe(() => {
        this.mascotaService.list().subscribe(data => {
          this.mascotaService.setList(data);
        });
      });
    }else{
      this.mascotaService.insert(this.mascota).subscribe(() => {
        this.mascotaService.list().subscribe(data => {
          this.mascotaService.setList(data);
        });
      });
    }
    this.router.navigate(['mascotas']);

    if(this.form.invalid){
      this.mensaje = 'Favor de llenar todos los campos';
      return;
    }
  } 
}
