import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerProfileComponent } from './volunteer-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VolunteerProfileComponent],
  imports: [
    CommonModule, RouterModule
  ],   exports: [VolunteerProfileComponent]

})
export class VolunteerProfileModule { }
