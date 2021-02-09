import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstActivityComponent } from './first-activity.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FirstActivityComponent],
  imports: [
    CommonModule, RouterModule
  ], 
  exports: [FirstActivityComponent]

})
export class FirstActivityModule { }
