import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainTeacherComponent } from './view-main-teacher.component';

describe('ViewMainTeacherComponent', () => {
  let component: ViewMainTeacherComponent;
  let fixture: ComponentFixture<ViewMainTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMainTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
