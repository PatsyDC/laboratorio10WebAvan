import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

interface Alumno {
  nombre: string;
  dni: string;
  curso: string;
  nota: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratorio10';
  alumnos: Alumno[] = [];
  newAlumno: Alumno = { nombre: '', dni: '', curso: '', nota: '' };

  constructor(private router: Router) {}
  
  onChangeInputAlumnos() {
    const isConfirmed = confirm('¿Estás seguro de que deseas enviar los datos del alumno?');
    if (isConfirmed) {
      this.alumnos.push({ ...this.newAlumno });
      this.newAlumno = { nombre: '', dni: '', curso: '', nota: '' };
      this.router.navigate(['/lista-alumnos']);
    }
  }
}
