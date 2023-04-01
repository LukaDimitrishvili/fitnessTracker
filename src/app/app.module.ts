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
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
