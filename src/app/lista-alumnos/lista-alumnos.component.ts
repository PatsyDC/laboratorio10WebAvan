import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno, AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.alumnoService.alumnos$.subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }
}
