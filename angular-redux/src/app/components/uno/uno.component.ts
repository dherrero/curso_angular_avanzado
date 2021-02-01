import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import {
  ACTION_CAMBIO_MENSAJE,
  ACTION_CAMBIO_VALOR,
} from 'src/app/store/actions/appActions';
import { TODO_ACTIONS } from 'src/app/store/actions/todoActions';
import IAppTodoState, { ITodo } from 'src/app/store/states/IAppTodoState';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss'],
})
export class UnoComponent implements OnInit, OnDestroy {
  // valores para modificar el estado
  nuevoMensaje: string = '';
  valor: boolean = false;
  title: string = '';
  todo: ITodo = {
    name: '',
    description: '',
    urgent: false,
  };
  list: ITodo[] = [];

  private chatState!: Observable<any>;
  private todoState!: Observable<any>;
  private subscriptions!: Subscription;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // TODO: solicitar el estado de la aplicación y obtener los campos que nos interesan
    // Para este componente. Especificamos la clave con la que el state
    this.subscriptions = new Subscription();

    this.chatState = this.storeService.getState('chatState');
    this.todoState = this.storeService.getState('todoState');

    this.subscriptions.add(
      this.chatState.subscribe((state) => {
        this.nuevoMensaje = state.mensaje;
        this.valor = state.valor;
      })
    );

    this.subscriptions.add(
      this.todoState.subscribe((state: IAppTodoState) => {
        this.title = state.title;
        this.list = state.list;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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

  addTodo() {
    this.list = [...this.list, { ...this.todo }];

    this.storeService.updateState({
      type: TODO_ACTIONS.ADD,
      payload: { ...this.todo },
    });

    this.todo = {
      name: '',
      description: '',
      urgent: false,
    };
  }
}
