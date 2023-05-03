import { Component } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { VirtualSotageService } from 'src/app/services/virtual-sotage.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  constructor(
    public serviceStorage: VirtualSotageService,
    public addFavourites: FavouriteService
  ) { }

  nextWorkout() {
    this.serviceStorage.nextWorkout()
  }
  delete(workout: any) {
    this.addFavourites.delete(workout.id)
  }

}
