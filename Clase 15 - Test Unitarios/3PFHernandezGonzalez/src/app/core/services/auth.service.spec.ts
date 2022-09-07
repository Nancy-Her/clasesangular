import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// import { AuthService } from './auth.service';
// import { of } from 'rxjs';

// describe('AuthService', () => {
//   let httpClientSpy: { get: jasmine.Spy };
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//        imports: [
//         HttpClientTestingModule
//       ]
//     });
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     // service = TestBed.inject(AuthService);
//     service = new AuthService(httpClientSpy as any);
//   });

//   it('should be created new', () => {
//     expect(service).toBeTruthy();
//   });

//   it('Debe retornar un arreglo de usuarios', (done: DoneFn) => {
//     const mockDatos = [
//       {usuario:"Ruth.Upton",contrasena:"7Kaie5T4h_2gfbE",admin:true,id:"1"},
//       {usuario:"Gloria76",contrasena:"dALKc29xEHFLBKm",admin:true,id:"2"},
//       {usuario:"fdsdf",contrasena:"SG1PwoGRsr7gaN1",admin:false,id:"3"},
//       {usuario:"Raquel.Lehner",contrasena:"TvQUdcRuafCPPwD",admin:false,id:"4"}
//     ];

//     httpClientSpy.get.and.returnValue(of(mockDatos));

//     service.obtenerSesion().subscribe((usuarios) => {
//       expect(usuarios).toEqual(mockDatos);
//       done();
//     })
//   });


  
// });
