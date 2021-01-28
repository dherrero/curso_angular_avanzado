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
  // listItems: [] = [];

  constructor() {}

  ngOnInit(): void {
    /*  this.items.subscribe((items) => {
      console.log('items', items);

      //  this.listItems = items;
    }); */
  }
}
