import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mercadona-my-library',
  template: `
    <input type="text" (keydown.enter)="marcarTexto($event)" />
    <div #contenido [hidden]="true">
      <ng-content> </ng-content>
    </div>
    <div [innerHTML]="contenidoControlado"></div>
  `,
  styleUrls: ['./my-library.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyLibraryComponent implements OnInit {
  @ViewChild('contenido', { static: true }) contenido: ElementRef;

  contenidoOriginal: string = '';
  contenidoControlado: string = '';

  constructor() {}

  ngOnInit(): void {
    this.contenidoOriginal = this.contenidoControlado = this.contenido.nativeElement.textContent;
  }

  marcarTexto(e: any) {
    const value = e.target.value;
    console.log(`value ${value}`);
    this.contenidoControlado = this.contenidoOriginal;
    this.contenidoControlado = this.contenidoOriginal.replace(
      new RegExp(value, 'g'),
      `<span class="textoMarcado">${value}</span>`
    );
  }
}
