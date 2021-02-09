import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstActivityComponent } from './first-activity/first-activity.component';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: FirstActivityComponent, pathMatch: 'full'
  },
  {
    path: 'volunteer-profile',
    component: VolunteerProfileComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
