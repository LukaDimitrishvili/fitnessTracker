import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http: HttpClient) { }
  getMuscleType() {
    const url = 'http://localhost:3000/muscleTypes'
    return this.http.get(url)
  }
  getWorkout() {
    const url = 'http://localhost:3000/workouts'
    return this.http.get(url)
  }
  getWorkoutByMuscle(muscleType: number) {
    const url = 'http://localhost:3000/workouts?category=' + muscleType
    return this.http.get(url)
  }
}
