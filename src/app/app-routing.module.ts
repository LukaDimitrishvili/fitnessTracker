import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
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
  path: '**',
  redirectTo: 'home-page'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
