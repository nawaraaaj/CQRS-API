import { TestBed } from '@angular/core/testing';

import { Apicall } from './apicall';

describe('Apicall', () => {
  let service: Apicall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apicall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
