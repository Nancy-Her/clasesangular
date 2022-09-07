import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


// describe: conjunto de pruebas que vamos a hacer
describe('Pruebas unitarias para AppComponent', () => {
  // se incorpora la logica 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

// se encarga de definir una prueba en específico 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // toBeTruthy: cuando no necesariamente tengamos un valor booleano no indefinido 

  it(`should have as title '2PFHernandezGonzalez'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('2PFHernandezGonzalez');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('2PFHernandezGonzalez app is running!');
  // });
});
