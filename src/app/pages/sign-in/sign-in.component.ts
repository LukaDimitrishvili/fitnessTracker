import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  hide = true;
  signIn = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    const value = this.signIn.value;
    if (value.name && value.password) {
      this.isLoading = true
      this.authService.login(value.name, value.password).subscribe(() => {
        if (this.authService.isUserLoggedIn()) {
          this.router.navigateByUrl('/workout')
        }
      })
    }
  }
}

