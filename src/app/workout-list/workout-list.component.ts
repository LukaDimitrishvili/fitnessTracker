import { Component } from '@angular/core';
import { VirtualSotageService } from '../services/virtual-sotage.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  constructor(
    public storageService: VirtualSotageService
  ) { }

}
