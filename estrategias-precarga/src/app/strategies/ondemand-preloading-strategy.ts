import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  PreloadingOptions,
  PreloadingService,
} from '../services/preloading-service.service';

/**
 * Función para definir una estrategia de precarga bajo demanda
 *  desde la vista, la interacción del usuario conlleva una carga de un módulo
 *  como: click, mouseover...
 */
@Injectable({
  providedIn: 'root',
  deps: [PreloadingService],
})
export class OnDemandPreloadingStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<PreloadingOptions>;

  constructor(private preloadingService: PreloadingService) {
    this.preloadOnDemand$ = this.preloadingService.state;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('call preload');

    return this.preloadOnDemand$.pipe(
      mergeMap((preloadingOptions) => {
        const preload = this.checkPreload(route, preloadingOptions);
        console.log(`${preload ? '' : 'NO'} precargamos la ruta ${route.path}`);

        return preload ? load() : EMPTY;
      })
    );
  }

  // método privada que nos permite saber si una ruta debe ser precargada o no
  private checkPreload(
    route: Route,
    preloadOptions: PreloadingOptions
  ): boolean {
    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    );
  }
}
