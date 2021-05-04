import { TestBed } from '@angular/core/testing';

import { RequestInterceptorsService } from './request-interceptors.service';

describe('RequestInterceptorsService', () => {
  let service: RequestInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
