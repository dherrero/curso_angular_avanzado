import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService {
  private subject = new Subject<PreloadingOptions>();

  // Un Subject podemos pasarlo a observable
  // ofrecemos los valores de la ruta como un observable
  state = this.subject.asObservable();

  constructor() {}

  // método para empezar con la precarga de la ruta en cuestión
  startPreload(routePath: string) {
    const options = new PreloadingOptions(routePath, true);
    this.subject.next(options);
  }
}

// Clase para definir las opciones que debe tener una ruta para ser precargada
export class PreloadingOptions {
  constructor(public routePath: string, public preload: boolean = true) {}
}
