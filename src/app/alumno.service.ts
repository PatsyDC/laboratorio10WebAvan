import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alumno {
  nombre: string;
  dni: string;
  curso: string;
  nota: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnosSubject = new BehaviorSubject<Alumno[]>([]);
  alumnos$ = this.alumnosSubject.asObservable();

  agregarAlumno(alumno: Alumno) {
    const currentAlumnos = this.alumnosSubject.value;
    this.alumnosSubject.next([...currentAlumnos, alumno]);
  }
}
