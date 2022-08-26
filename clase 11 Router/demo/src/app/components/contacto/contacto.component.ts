import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
id!: number;
nombre!: string;
curso!: string;
suscripcion!: Subscription;

constructor(

 private activatedRoute : ActivatedRoute

) { }
// paramMap es un observable: tienes todos los parámetros de una ruta en concreto
 ngOnInit(): void {
    this.suscripcion = this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.nombre = parametros.get('nombre') || '';
      this.curso = parametros.get('curso') || ''; 
    })
  }
   ngOnDestroy(): void {
    console.log('Estoy cambiando de componente');
    this.suscripcion.unsubscribe();
  }

}
