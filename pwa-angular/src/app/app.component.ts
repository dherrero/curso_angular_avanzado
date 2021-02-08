import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Categories } from './services/data.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa-angular';
  frase!: Categories;
  readonly VAPID_PUBLIC_KEY =
    'BF_kPKQj3glbz7sTHlv4r0csr1gqwIOOAoi5NA4mNXt_0vriOWGzQW1_UqHZwl4b9KzvxHRREvNcNlt1L5_6vv8';

  constructor(
    private updates: SwUpdate,
    private swPush: SwPush,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.reloadCache();
  }

  // Método de actualizar la aplicación cuando el service worker
  // detecte que hay una nueva novedad
  reloadCache() {
    if (this.updates.isEnabled) {
      this.updates.available.subscribe((event) => {
        /**
         * Cada vez que haya un cambio en la aplicación
         * se va a forzar el refresco de la misma
         * El service worker obtendrá la nueva aplicación "Update"
         *
         * Se le solicita al usuario que acepte la actualizacion de la app
         */

        if (confirm('Hay una nueva versión disponible. ¿Desea cargarla?')) {
          this.updates.activateUpdate().then(() => window.location.reload());
        }
      });
    }
  }

  getNewSentence() {
    this.dataService.getRandomSentence().subscribe((response: Categories) => {
      this.frase = response;
    });
  }

  subscribeNewsLetter() {
    if (this.updates.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY,
        })
        .then((sub) => {
          this.dataService.subscribe(sub).subscribe();
        });
    }
  }
}
