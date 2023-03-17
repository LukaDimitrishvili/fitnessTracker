import { Component } from '@angular/core';
import { VirtualSotageService } from '../services/virtual-sotage.service';

@Component({
  selector: 'app-workout-description',
  templateUrl: './workout-description.component.html',
  styleUrls: ['./workout-description.component.css']
})
export class WorkoutDescriptionComponent {
  constructor(
    public storageService: VirtualSotageService
  ) { }

}
