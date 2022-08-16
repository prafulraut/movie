import { TestBed } from '@angular/core/testing';

import { ServiceMethodService } from './service-method.service';

describe('ServiceMethodService', () => {
  let service: ServiceMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
