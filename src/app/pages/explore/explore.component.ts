import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExploreService } from 'src/app/services/explore.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: any;
  muscleTypes: any = []
  workouts: any = []
  myControl: any = new FormControl()
  constructor
    (private exploreservice: ExploreService,
      public favouriteservice: FavouriteService) { }
  ngOnInit(): void {
    this.exploreservice.getMuscleType().subscribe((muscleTypes) => {
      this.muscleTypes = muscleTypes
    })
    this.exploreservice.getWorkout().subscribe((workouts) => {
      this.workouts = workouts
    })
    this.myControl.valueChanges.subscribe((par: any) => {
      this.exploreservice.getWorkoutByMuscle(par).subscribe((workouts) => {
        this.workouts = workouts

      })
    })
  }
  addFav(workout: any): void {
    this.favouriteservice.addFavourite(workout)
  }

}
