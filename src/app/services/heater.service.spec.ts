import { TestBed } from '@angular/core/testing';

import { HeaterService } from './heater.service';

describe('HeaterService', () => {
  let service: HeaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
