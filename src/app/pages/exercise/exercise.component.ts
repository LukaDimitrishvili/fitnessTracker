import { Component, OnInit } from '@angular/core';
import { SearchedWorkout } from 'src/app/interface/workout.interface';
import { ExerciseHttpService } from 'src/app/services/exercise-http.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  result: SearchedWorkout[] = [

  ];
  searchtext: string = ''

  constructor(private exersiseHttpService: ExerciseHttpService) { }

  onSearch(search: any): void {
    this.exersiseHttpService.getWorkout(search).subscribe((result: any) => {
      this.result = result
    })

  }

}
