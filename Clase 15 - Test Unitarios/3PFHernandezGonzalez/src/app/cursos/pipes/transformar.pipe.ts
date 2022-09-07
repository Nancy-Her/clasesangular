import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform( duracion: any ): any {

  

    return duracion + ' ' + 'Semanas'  ;

  

}

}
