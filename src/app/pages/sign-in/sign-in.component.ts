import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signIn = new FormGroup({

    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService) { }

  onSubmit() {
    const value = this.signIn.value;
    if (value.name && value.password) {
      this.authService.login(value.name, value.password)
    }

  }

}
