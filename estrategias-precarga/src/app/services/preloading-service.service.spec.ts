import { TestBed } from '@angular/core/testing';

import { PreloadingServiceService } from './preloading-service.service';

describe('PreloadingServiceService', () => {
  let service: PreloadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
