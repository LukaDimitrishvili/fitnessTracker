import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }
  favourites: any[] = []

  addFavourite(workout: any) {
    this.favourites.push(workout)
  }
  delete(id: any) {
    const index = this.favourites.findIndex((workout) => workout.id === id);
    if (index > -1) { // only splice array when item is found
      this.favourites.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

}
