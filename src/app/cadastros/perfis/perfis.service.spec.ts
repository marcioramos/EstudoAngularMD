import { TestBed, inject } from '@angular/core/testing';

import { PerfisService } from './perfis.service';

describe('PerfisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfisService]
    });
  });

  it('should ...', inject([PerfisService], (service: PerfisService) => {
    expect(service).toBeTruthy();
  }));
});
