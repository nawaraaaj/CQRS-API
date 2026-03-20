import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getstudentbyid } from './getstudentbyid';

describe('Getstudentbyid', () => {
  let component: Getstudentbyid;
  let fixture: ComponentFixture<Getstudentbyid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Getstudentbyid],
    }).compileComponents();

    fixture = TestBed.createComponent(Getstudentbyid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
