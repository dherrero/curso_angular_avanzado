import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../store/config/IAppStore';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store<any>) {}

  /// Método para obtener el estado de la aplicación
  // @params state: el nombre del estado que buscamos (chatState)
  getState(state: string) {
    return this.store.select(state);
  }

  /// Método para despachar una acción y generar un nuevo estado de la app
  updateState(obj: any) {
    this.store.dispatch({
      type: obj.type,
      payload: obj.payload,
    });
  }
}
