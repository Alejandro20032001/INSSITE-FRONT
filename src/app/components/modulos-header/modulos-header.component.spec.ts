import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosHeaderComponent } from './modulos-header.component';

describe('ModulosHeaderComponent', () => {
  let component: ModulosHeaderComponent;
  let fixture: ComponentFixture<ModulosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
