import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // Importa dato desde componente padre
  // Dentro de input, entre comillas, se puede cambiar la nomenclatura de la variable. Ej. ('data')
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) { }
}
