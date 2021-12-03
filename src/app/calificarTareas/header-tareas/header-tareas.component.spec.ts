import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTareasComponent } from './header-tareas.component';

describe('HeaderTareasComponent', () => {
  let component: HeaderTareasComponent;
  let fixture: ComponentFixture<HeaderTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
