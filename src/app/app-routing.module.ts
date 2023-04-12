import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { WorkoutComponent } from './pages/workout/workout.component';

const routes: Routes = [{
  path: 'workout',
  component: WorkoutComponent,
  canActivate: [AuthGuard]
},
{
  path: 'home-page',
  component: HomePageComponent
},
{
  path: 'sign-in',
  component: SignInComponent
},

{
  path: 'exercise',
  component: ExerciseComponent
},
{
  path: 'pricing',
  component: PricingComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: '**',
  redirectTo: 'home-page'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
