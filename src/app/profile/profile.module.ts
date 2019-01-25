import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserOnComponent } from './user-on/user-on.component';

@NgModule({
  declarations: [UserOnComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [
    UserOnComponent
  ]
})
export class ProfileModule { }
