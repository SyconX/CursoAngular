import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 7500,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
  agregarNuevoPersonaje(arg: Personaje) {
    this.personajes.push(arg);
  }
}
