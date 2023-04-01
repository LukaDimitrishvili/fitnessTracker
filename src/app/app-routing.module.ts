import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkoutComponent } from './pages/workout/workout.component';

const routes: Routes = [{
  path: 'workout',
  component: WorkoutComponent
},
{
  path: 'home-page',
  component: HomePageComponent
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
