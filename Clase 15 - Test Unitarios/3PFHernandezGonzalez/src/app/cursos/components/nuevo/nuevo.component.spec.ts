import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NuevoComponent } from './nuevo.component';

describe('Pruebas unitarias para NuevoComponent', () => {
  let component: NuevoComponent;
  let fixture: ComponentFixture<NuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
       ReactiveFormsModule
      ],
      declarations: [ NuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente correctamente', () => {
    expect(component).toBeTruthy();
  });
  it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const fechaInicio = formulario.controls['fechaInicio'];
    const fechaFin = formulario.controls['fechaFin'];
    const profesor = formulario.controls['profesor'];

    nombre.setValue('Angular');

    expect(formulario.invalid).toBeTrue();

  });
  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const fechaInicio = formulario.controls['fechaInicio'];
    const fechaFin = formulario.controls['fechaFin'];
    const profesor = formulario.controls['profesor'];

    nombre.setValue('InnoDB3');
    fechaInicio.setValue('20/12/2021');
    fechaFin.setValue('10/02/2023');
    profesor.setValue('Gisselle');

    expect(formulario.invalid).toBeFalse();
  });
  it('Se renderiza el objeto de cursos cuando doy click al botón del formulario', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls['nombre'];
    const fechaInicio = formulario.controls['fechaInicio'];
    const fechaFin = formulario.controls['fechaFin'];
    const profesor = formulario.controls['profesor'];

    nombre.setValue('InnoDB3');
    fechaInicio.setValue('20/12/2021');
    fechaFin.setValue('10/02/2023');
    profesor.setValue('Gisselle');

    const boton = fixture.debugElement.query(By.css('#btnAgregar'));
    boton.nativeElement.click();
    fixture.detectChanges();

    const listaCursosRef = fixture.debugElement.query(By.css('#lista-cursos'));

    expect(listaCursosRef ).toBeTruthy();
  });




});
