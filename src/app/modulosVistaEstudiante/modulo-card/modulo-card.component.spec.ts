import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCardComponent } from './modulo-card.component';

describe('ModuloCardComponent', () => {
  let component: ModuloCardComponent;
  let fixture: ComponentFixture<ModuloCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
