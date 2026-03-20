import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatestudent } from './updatestudent';

describe('Updatestudent', () => {
  let component: Updatestudent;
  let fixture: ComponentFixture<Updatestudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatestudent],
    }).compileComponents();

    fixture = TestBed.createComponent(Updatestudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
