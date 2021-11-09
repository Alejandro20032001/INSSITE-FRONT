import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaPrincipalAnadirMaterialModuloComponent } from './ventana-principal-anadir-material-modulo.component';

describe('VentanaPrincipalAnadirMaterialModuloComponent', () => {
  let component: VentanaPrincipalAnadirMaterialModuloComponent;
  let fixture: ComponentFixture<VentanaPrincipalAnadirMaterialModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaPrincipalAnadirMaterialModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaPrincipalAnadirMaterialModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
