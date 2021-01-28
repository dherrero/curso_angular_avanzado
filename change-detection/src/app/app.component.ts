import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'change-detection';

  live = true;

  items: Array<any> = [];
  items$ = new BehaviorSubject(this.items);

  addItem() {
    const number: number = Math.floor(Math.random() * 100 + 1);
    this.items.push({ number });

    this.items$.next(this.items);
  }
}
