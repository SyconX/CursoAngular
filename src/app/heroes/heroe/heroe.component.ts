import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCaps() {
    return this.nombre.toUpperCase();
  }

  cambiarHeroe(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 32;
  }
  /*
  set cambiarHeroe(nombre: string) {
    this.nombre = nombre;
  }
  set cambiarEdad(edad: number) {
    this.edad = edad;
  } */

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
}
