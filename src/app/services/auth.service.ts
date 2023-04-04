import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth.http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus: boolean = false;

  constructor(private authHttp: AuthHttpService) { }
  login(username: string, password: string) {
    this.authHttp.signIn({ username, password }).subscribe((result) => {
      this.loggedInStatus = true;
    })

  }

  isUserLoggedIn(): boolean {
    return false;
  }
}
