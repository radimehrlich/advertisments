import { TestBed } from '@angular/core/testing';

import { AdvertismentsDataService } from './advertisments-data.service';

describe('AdvertismentsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertismentsDataService = TestBed.get(AdvertismentsDataService);
    expect(service).toBeTruthy();
  });
});
