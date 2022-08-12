import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AltaAlumnosComponent } from '../alta-alumnos/alta-alumnos.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

 

  ngOnInit(): void {
  }

  openDialog() {
   const dialogRef = this.dialog.open(AltaAlumnosComponent, {
     width: '550px', 
   
    });
 
  

}




}