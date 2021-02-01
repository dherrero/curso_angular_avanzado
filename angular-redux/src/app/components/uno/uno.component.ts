import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import {
  ACTION_CAMBIO_MENSAJE,
  ACTION_CAMBIO_VALOR,
} from 'src/app/store/actions/appActions';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss'],
})
export class UnoComponent implements OnInit {
  // valores para modificar el estado
  nuevoMensaje: string = '';
  valor: boolean = false;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // TODO: solicitar el estado de la aplicación y obtener los campos que nos interesan
    // Para este componente. Especificamos la clave con la que el state
    this.storeService.getState('chatState').subscribe((state) => {
      this.nuevoMensaje = state.mensaje;
      this.valor = state.valor;
    });
  }

  cambiarMensaje() {
    console.table({
      type: ACTION_CAMBIO_MENSAJE,
      payload: this.nuevoMensaje,
    });

    this.storeService.updateState({
      type: ACTION_CAMBIO_MENSAJE,
      payload: this.nuevoMensaje,
    });
  }

  cambiarValor() {
    console.table({
      type: ACTION_CAMBIO_VALOR,
      payload: !this.valor,
    });

    this.storeService.updateState({
      type: ACTION_CAMBIO_VALOR,
      payload: !this.valor,
    });
  }
}
