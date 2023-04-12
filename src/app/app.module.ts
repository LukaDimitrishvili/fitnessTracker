import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutAnimationComponent } from './workout-animation/workout-animation.component';
import { TimerComponent } from './timer/timer.component';
import { CaloriesComponent } from './calories/calories.component';
import { WorkoutDescriptionComponent } from './workout-description/workout-description.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LandingComponent } from './pages/landing/landing.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    WorkoutListComponent,
    WorkoutAnimationComponent,
    TimerComponent,
    CaloriesComponent,
    WorkoutDescriptionComponent,
    WorkoutComponent,
    HomePageComponent,
    SignInComponent,
    LandingComponent,
    ExerciseComponent,
    PricingComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
