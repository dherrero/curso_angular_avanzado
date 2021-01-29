import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent implements OnInit {
  @Input()
  items!: Observable<any>;

  items2: Array<any> = [];
  listItems: [] = [];

  constructor() {}

  ngOnInit(): void {
    this.items.subscribe((items) => {
      console.log('items', items);

      this.listItems = items;
    });
  }

  // TODO: función para contrastar
  addItems2() {
    const number: number = Math.floor(Math.random() * 100 + 1);
    this.items2.push({ number });
  }
}
