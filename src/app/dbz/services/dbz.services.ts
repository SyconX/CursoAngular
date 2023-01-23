import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()

export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 7500,
        },
        {
            nombre: 'Vegeta',
            poder: 7500,
        },
    ];

    get personajes(): Personaje[] {
        // Rompe la relación de referencia por la que se envía
        //  el objeto para que no pueda ser manipulado
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonajes(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}