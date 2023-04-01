import { Component } from '@angular/core';
import { VirtualSotageService } from 'src/app/services/virtual-sotage.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  constructor(
    public serviceStorage: VirtualSotageService
  ) { }

  nextWorkout() {
    this.serviceStorage.nextWorkout()
  }
}
