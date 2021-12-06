import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosVEHeaderComponent } from './modulos-veheader.component';

describe('ModulosVEHeaderComponent', () => {
  let component: ModulosVEHeaderComponent;
  let fixture: ComponentFixture<ModulosVEHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosVEHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosVEHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
