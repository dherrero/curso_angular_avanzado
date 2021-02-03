import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appLifecycle]',
})
export class LifecycleDirective implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    this.logCycle('OnInit');
  }

  ngOnDestroy() {
    this.logCycle('OnDestroy');
  }

  private logCycle(event: string) {
    console.log(`SPY lifecycle ${event}`);
  }
}
