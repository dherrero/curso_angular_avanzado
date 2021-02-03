import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSizeDirective {
  private _size: number = 16;
  @Input('appFontSize') set size(num: number) {
    this._size = num;
    this.changeElementSize();
  }

  get size(): number {
    return this._size;
  }

  constructor(private el: ElementRef) {}

  changeElementSize() {
    console.log(`${this.size}px`);

    this.el.nativeElement.style.fontSize = `${this.size}px`;
  }
}
