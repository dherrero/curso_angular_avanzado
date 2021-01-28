import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

export class DataNumberProvider {
  data = 1;
  constructor() {
    setInterval(() => {
      this.data = Math.floor(Math.random() * 100 + 1);
      console.log(`Data number ha generado el ${this.data}`);
    }, 500);
  }
}

@Component({
  selector: 'app-on-reattach',
  templateUrl: './on-reattach.component.html',
  styleUrls: ['./on-reattach.component.scss'],
  inputs: ['liveData'],
})
export class OnReattachComponent implements OnInit {
  constructor(
    private ref: ChangeDetectorRef,
    public dataNumberProvider: DataNumberProvider
  ) {}

  set liveData(value: boolean) {
    if (value) {
      // si queremos que se vean reflejados los cambios en la vista lo reincorporamos
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }

  ngOnInit(): void {}
}
