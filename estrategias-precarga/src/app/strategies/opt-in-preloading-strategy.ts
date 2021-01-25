import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

// Una estrategia de precarga que va a buscar un elemento llamado "preload"
// dentro de la configuración de las rutas de nuestro módulo de enrutado
export class OptInPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : EMPTY;
  }
}
