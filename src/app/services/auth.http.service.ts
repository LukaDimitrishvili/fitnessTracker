import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  url: string = 'https://dummyjson.com/auth/login';



  constructor(private http: HttpClient) { }
  signIn(params: { username: string, password: string }) {
    return this.http.post(
      this.url,
      params,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    {

    }

  }

}
