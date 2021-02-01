import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss'],
})
export class DosComponent implements OnInit, OnDestroy {
  mensaje: string = 'MENSAJE POR DEFECTO';
  valor: boolean = false;
  storeSubscription!: Subscription;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeSubscription = this.storeService
      .getState('chatState')
      .subscribe((state) => {
        this.mensaje = state.mensaje;
        this.valor = state.valor;
      });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
