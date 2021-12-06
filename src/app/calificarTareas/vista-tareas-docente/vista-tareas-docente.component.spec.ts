import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTareasDocenteComponent } from './vista-tareas-docente.component';

describe('VistaTareasDocenteComponent', () => {
  let component: VistaTareasDocenteComponent;
  let fixture: ComponentFixture<VistaTareasDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTareasDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTareasDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
