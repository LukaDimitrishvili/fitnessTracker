import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAnimationComponent } from './workout-animation.component';

describe('WorkoutAnimationComponent', () => {
  let component: WorkoutAnimationComponent;
  let fixture: ComponentFixture<WorkoutAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
