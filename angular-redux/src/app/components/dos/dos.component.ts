import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import IAppTodoState, { ITodo } from 'src/app/store/states/IAppTodoState';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss'],
})
export class DosComponent implements OnInit, OnDestroy {
  mensaje: string = 'MENSAJE POR DEFECTO';
  valor: boolean = false;
  title: string = '';
  todos: ITodo[] = [];
  storeSubscription!: Subscription;
  todoSubscription!: Subscription;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeSubscription = this.storeService
      .getState('chatState')
      .subscribe((state) => {
        this.mensaje = state.mensaje;
        this.valor = state.valor;
      });
    this.todoSubscription = this.storeService
      .getState('todoState')
      .subscribe((state: IAppTodoState) => {
        this.title = state.title;
        this.todos = state.list;
      });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
