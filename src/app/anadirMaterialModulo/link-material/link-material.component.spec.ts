import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkMaterialComponent } from './link-material.component';

describe('LinkMaterialComponent', () => {
  let component: LinkMaterialComponent;
  let fixture: ComponentFixture<LinkMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
