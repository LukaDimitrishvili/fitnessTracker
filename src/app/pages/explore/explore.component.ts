import { Component, OnInit } from '@angular/core';
import { ExploreService } from 'src/app/services/explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  selected: any;
  muscleTypes: any = []
  workouts: any = []
  constructor(private exploreservice: ExploreService) { }
  ngOnInit(): void {
    this.exploreservice.getMuscleType().subscribe((muscleTypes) => {
      this.muscleTypes = muscleTypes
    })
    this.exploreservice.getWorkout().subscribe((workouts) => {
      this.workouts = workouts
    })
  }

}
