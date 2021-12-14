import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEstudianteTareaComponent } from './vista-estudiante-tarea.component';

describe('VistaEstudianteTareaComponent', () => {
  let component: VistaEstudianteTareaComponent;
  let fixture: ComponentFixture<VistaEstudianteTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEstudianteTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEstudianteTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
