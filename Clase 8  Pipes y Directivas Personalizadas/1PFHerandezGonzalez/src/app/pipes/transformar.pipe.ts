import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  // transform(value: string): string {

  //   return value + 'tel:' ;
  // }
  transform( nombre: any ,apellido: any): any {

  

    return nombre + ' ' + apellido ;

  

}

}
