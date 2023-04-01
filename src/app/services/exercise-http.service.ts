import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseHttpService {

  constructor(private http: HttpClient) { }
  getWorkout(name: string) {
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises'
    const headers = {
      'X-RapidAPI-Key': '3f6e5e8a7bmsh9c5635619d26d28p18a678jsnc06ceac0dec3',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
    const params = { name }
    return this.http.get(url, {
      headers,
      params
    })

  }
}
