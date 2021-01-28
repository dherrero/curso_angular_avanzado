import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';

// Clase Provider de nombres
export class DataListProvider {
  get data() {
    const RandomName = Mock.Random;
    return [
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
    ];
  }
}

@Component({
  selector: 'app-on-detach',
  templateUrl: './on-detach.component.html',
  styleUrls: ['./on-detach.component.scss'],
})
export class OnDetachComponent implements OnInit {
  constructor(
    private ref: ChangeDetectorRef,
    public dataListProvider: DataListProvider
  ) {}

  ngOnInit(): void {
    // Forzamos a que los cambios no se tengan en cuenta en la vista
    // El componente, por defecto tras esto no contemplará cambios en la vista hasta que se le haga un reatach
    this.ref.detach();

    // cada 4 segundos, forzamos que la vista se refresque
    setInterval(() => {
      this.ref.detectChanges();
    }, 4000);
  }
}
