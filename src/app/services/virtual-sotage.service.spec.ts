import { TestBed } from '@angular/core/testing';

import { VirtualSotageService } from './virtual-sotage.service';

describe('VirtualSotageService', () => {
  let service: VirtualSotageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualSotageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
