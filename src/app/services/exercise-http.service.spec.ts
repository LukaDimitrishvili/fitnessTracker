import { TestBed } from '@angular/core/testing';

import { ExerciseHttpService } from './exercise-http.service';

describe('ExerciseHttpService', () => {
  let service: ExerciseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
