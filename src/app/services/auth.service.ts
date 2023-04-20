import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthHttpService } from './auth.http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus: boolean = false;

  constructor(private authHttp: AuthHttpService) { }

  login(username: string, password: string) {
    return this.authHttp.signIn({ username, password }).pipe(
      tap(() => this.loggedInStatus = true)
    )

  }

  isUserLoggedIn(): boolean {
    return this.loggedInStatus;
  }
  logout() {
    this.loggedInStatus = false;
  }
}
