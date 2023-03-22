import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{
  proyecto: Proyecto = null;

  constructor(private proyectoS: ProyectoService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoS.details(id).subscribe(
      {
        next: (data) => {
          this.proyecto = data;
        },
        error: (err) => {
          alert("Error al editar el proyecto");
          this.router.navigate(['']);
        }
      }
    );
  }

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      {
        next: (data) => {
          alert("Proyecto editado correctamente");
          this.router.navigate(['']);
        },
        error: (err) => {
          alert("Error al editar el proyecto");
          this.router.navigate(['']);
        }
      }
    );
  }

}
