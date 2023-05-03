import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreDetailsService {

  constructor(private http: HttpClient) { }
  getWorkoutDetail(id: string) {
    const url = 'http://localhost:3000/workouts/' + id
    return this.http.get(url)
  }
}
