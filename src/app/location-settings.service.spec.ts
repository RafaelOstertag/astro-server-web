import {TestBed} from '@angular/core/testing';

import {LocationSettingsService} from './location-settings.service';

describe('LocationSettingsService', () => {
  let service: LocationSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
