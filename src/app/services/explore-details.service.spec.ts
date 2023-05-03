import { TestBed } from '@angular/core/testing';

import { ExploreDetailsService } from './explore-details.service';

describe('ExploreDetailsService', () => {
  let service: ExploreDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
