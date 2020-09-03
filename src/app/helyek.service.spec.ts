import { TestBed } from '@angular/core/testing';

import { HelyekService } from './helyek.service';

describe('HelyekService', () => {
  let service: HelyekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelyekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
