import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchCourseComponent } from './view-search-course.component';

describe('ViewSearchCourseComponent', () => {
  let component: ViewSearchCourseComponent;
  let fixture: ComponentFixture<ViewSearchCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSearchCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
