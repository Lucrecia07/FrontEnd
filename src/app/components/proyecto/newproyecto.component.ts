import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombre: string;
  descripcion: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.descripcion);
    this.proyectoS.save(proyecto).subscribe(
      {
        next: (data) => {
          alert("Proyecto agregado correctamente");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Falló");
          this.router.navigate(['']);
        }
      }
    );
  }

}
