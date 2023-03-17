import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Workout } from '../interface/workout.interface';

@Injectable({
  providedIn: 'root'
})
export class VirtualSotageService {
  public workouts: Workout[] = [
    { name: 'pushups', image: 'https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg', timer: 80, calories: 97, description: 'Do pushups', done: false, id: 1 },
    { name: 'pullups', image: 'https://madbarzpictures.blob.core.windows.net/madbarzpictures/50-pull-ups-every-morningB83802846E6B884CA7111DD1E919174D.png', timer: 30, calories: 56, description: 'Do pullups!', done: false, id: 2 },
    { name: 'chinUps', image: 'https://qph.cf2.quoracdn.net/main-qimg-ec19b266002573109a445be6dbaf77ee-lq', timer: 45, calories: 89, description: 'Do chinups!', done: false, id: 3 }
  ]
  activeWorkout: Workout | undefined
  constructor() {
    this.activeWorkout = this.workouts[0]
  }
  nextWorkout() {
    const index = this.workouts.findIndex((workout) => workout.id === this.activeWorkout?.id);
    this.workouts[index].done = true;
    this.activeWorkout = this.workouts[index + 1]
  }

}
