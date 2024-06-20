import { TestBed } from '@angular/core/testing';

import { ActiveInfoDataService } from './active-info-data.service';

describe('ActiveInfoDataService', () => {
  let service: ActiveInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
