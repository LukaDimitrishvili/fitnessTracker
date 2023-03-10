import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { UserComponent } from './user/user.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutAnimationComponent } from './workout-animation/workout-animation.component';
import { TimerComponent } from './timer/timer.component';
import { CaloriesComponent } from './calories/calories.component';
import { WorkoutDescriptionComponent } from './workout-description/workout-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    UserComponent,
    WorkoutListComponent,
    WorkoutAnimationComponent,
    TimerComponent,
    CaloriesComponent,
    WorkoutDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
