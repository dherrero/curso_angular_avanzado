import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AttrDirective {
  @Input() defaultColor: string = 'blue';
  @Input('appHighlight') highlightColor?: string = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.highlightColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(null);
  }

  constructor(private el: ElementRef) {}

  private highLight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
