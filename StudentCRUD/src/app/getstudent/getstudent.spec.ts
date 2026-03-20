import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getstudent } from './getstudent';

describe('Getstudent', () => {
  let component: Getstudent;
  let fixture: ComponentFixture<Getstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Getstudent],
    }).compileComponents();

    fixture = TestBed.createComponent(Getstudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
