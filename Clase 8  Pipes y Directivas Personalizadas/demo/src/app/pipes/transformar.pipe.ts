import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
meses: string[] = [
'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
   transform(value: {fechaInicio: Date, fechaFin: Date}, ...args: any[]): string {
// objeto json
// fechaIncio: Date,
// fechaFin: Date
    const texto = args[0];
    let resultado: string;
    // resultado = "De" / *Mes fecha inicio*/ "a" /Mes fecha fin*/
    resultado = "De " + this.meses[value.fechaInicio.getMonth()] + " a " + this.meses[value.fechaFin.getMonth()]
    
    if(texto === 'uppercase')
      return resultado.toUpperCase();
    else{
      return resultado;
    }
  }

}
