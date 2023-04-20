import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VirtualSotageService } from './services/virtual-sotage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  title = 'fitness-tracker';

  onLogOut() {
    this.authService.logout()
    this.router.navigateByUrl('/home-page')
  }

}
