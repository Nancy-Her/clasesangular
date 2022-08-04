import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
formulario!: FormGroup;
  constructor(
    private fb: FormBuilder
    ) {
    this.formulario =fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.max(110)]),
      correo: new FormControl('ejemplo@gmail.com', [Validators.required, Validators.email]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(8)])


    });

  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.formulario);
  }

}
