import { TestBed } from '@angular/core/testing';

import { NgxMatTypeaheadService } from './ngx-mat-typeahead.service';

describe('NgxMatTypeaheadService', () => {
  let service: NgxMatTypeaheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatTypeaheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
