import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../interface/user.interface';
import { AuthHttpService } from './auth.http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus: boolean = false;
  userInfo?: User;

  constructor(private authHttp: AuthHttpService) {
    this.checkForUser();
  }

  checkForUser(): void {
    const user = localStorage.getItem('userInfo');
    if (user) {
      this.loggedInStatus = true;
      this.userInfo = JSON.parse(user)
    }
  }


  login(username: string, password: string) {
    return this.authHttp.signIn({ username, password }).pipe(
      tap((log: any) => {
        if (log) {
          this.userInfo = log;
          this.loggedInStatus = true;
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        }

      })
    )

  }

  isUserLoggedIn(): boolean {
    return this.loggedInStatus;
  }
  logout() {
    this.loggedInStatus = false;
    this.userInfo = undefined;
    localStorage.clear();
  }
}
