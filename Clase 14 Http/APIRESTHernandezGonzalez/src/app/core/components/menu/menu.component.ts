import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Sesion } from '../../../models/sesion';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  
  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.sesion$ = this.auth.obtenerSesion();
  }

  cerrarSesion(){
    this.auth.cerrarSesion();
    this.router.navigate(['auth/login']);
  }
}

