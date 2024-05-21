import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnoService, Alumno } from '../alumno.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  newAlumno: Alumno = { nombre: '', dni: '', curso: '', nota: '' };

  constructor(private router: Router, private alumnoService: AlumnoService) {}

  onChangeInputAlumnos() {
    const isConfirmed = confirm('¿Estás seguro de que deseas enviar los datos del alumno?');
    if (isConfirmed) {
      this.alumnoService.agregarAlumno({ ...this.newAlumno });
      this.newAlumno = { nombre: '', dni: '', curso: '', nota: '' };
      this.router.navigate(['/lista-alumnos']);
    }
  }
}
