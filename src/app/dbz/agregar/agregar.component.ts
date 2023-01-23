import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  // Crea una emisión de un evento
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length !== 0) {
      console.log(this.nuevo);
      // Emite en el evento el valor de this.nuevo
      this.onNuevoPersonaje.emit(this.nuevo);
    }
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
