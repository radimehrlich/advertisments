import { TestBed } from '@angular/core/testing';

import { AdvertismentsFileServiceService } from './advertisments-file-service.service';

describe('AdvertismentsFileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertismentsFileServiceService = TestBed.get(AdvertismentsFileServiceService);
    expect(service).toBeTruthy();
  });
});
