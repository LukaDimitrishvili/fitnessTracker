import { Component } from '@angular/core';
import { VirtualSotageService } from '../services/virtual-sotage.service';

@Component({
  selector: 'app-workout-animation',
  templateUrl: './workout-animation.component.html',
  styleUrls: ['./workout-animation.component.css']
})
export class WorkoutAnimationComponent {
  constructor(
    public storageService: VirtualSotageService
  ) { }

}
