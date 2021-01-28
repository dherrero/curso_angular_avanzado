import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit {
  nTicks = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nTicks++;
      console.log(`número de ticks actual: ${this.nTicks}`);
    }, 1000);
  }
}
