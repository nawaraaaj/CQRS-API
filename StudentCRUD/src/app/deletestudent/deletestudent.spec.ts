import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletestudent } from './deletestudent';

describe('Deletestudent', () => {
  let component: Deletestudent;
  let fixture: ComponentFixture<Deletestudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Deletestudent],
    }).compileComponents();

    fixture = TestBed.createComponent(Deletestudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
