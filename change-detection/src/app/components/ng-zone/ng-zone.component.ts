import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss'],
})
export class NgZoneComponent implements OnInit {
  // Un nivel de progreso que empieza en 0
  progress = 0;
  text: string = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  // función encargada de aumentar el nivel del progreso
  // DENTRO del angular zone
  // TODO
  processInsideNgZone() {
    this.text = 'DENTRO';
    this.progress = 0;
    this.incrementProgress(() => {
      console.log('(DENTRO DE NGZONE) Aumento Realizado');
    });
  }

  // función encargada de aumentar el nivel del progreso
  // FUERA del angular zone
  // TODO
  processOutsideNgZone() {
    this.text = 'FUERA';
    this.progress = 0;

    this.ngZone.runOutsideAngular(() => {
      this.incrementProgress(() => {
        // En el callback le vamos a decir al ngZone que vuelva
        // a ejecutarse para mostrar los cambios en la vista

        this.ngZone.run(() => {
          console.log('(FUERA DE NGZONE) Aumento Realizado');
        });
      });
    });
  }

  incrementProgress(doneCallback: () => void) {
    this.progress++;

    console.log(`Progreso actual ${this.progress}`);

    if (this.progress < 100) {
      setTimeout(() => {
        this.incrementProgress(doneCallback);
      });
    } else {
      doneCallback();
    }
  }
}
