import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Superman'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    //  O devuelve string o si es undefined, string vacío
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
