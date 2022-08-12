import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elemento: ElementRef) { 
 this.elemento.nativeElement.style.color = '#69f0ae';
 this.elemento.nativeElement.style.fontSize = '20px';


  }

}
