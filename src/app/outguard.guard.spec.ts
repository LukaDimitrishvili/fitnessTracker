import { TestBed } from '@angular/core/testing';

import { OutguardGuard } from './outguard.guard';

describe('OutguardGuard', () => {
  let guard: OutguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
